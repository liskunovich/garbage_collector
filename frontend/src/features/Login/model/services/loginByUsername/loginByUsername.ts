import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {JWTTokenResponse, userActions} from "entities/User";
import {LOCALSTORAGE_ACCESS_TOKEN_KEY} from "shared/consts/localstorage";
import Api from "shared/api/axios";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<JWTTokenResponse, LoginByUsernameProps, {rejectValue: string}>(
    'login/loginByUsername',
    async (data, thunkAPI) => {
        try {
            const response = await Api.post<JWTTokenResponse>('http://localhost:8000/api/v1/token/', data);
            localStorage.setItem(LOCALSTORAGE_ACCESS_TOKEN_KEY, response.data.access);
            thunkAPI.dispatch(userActions.setUserData({isAuth: true}));
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue('Invalid username or password!');
        }
    }
)