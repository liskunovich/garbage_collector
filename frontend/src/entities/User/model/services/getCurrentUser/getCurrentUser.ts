import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "shared/api/axios";

interface CurrentUserResponse {
    carton: number;
    glass: number;
    plastic: number;
    user: {
        id: number;
        username: string;
        email: string;
    }
}

export const getCurrentUser = createAsyncThunk<CurrentUserResponse>(
    'user/getCurrentUser',
    async (arg, thunkAPI) => {
        try {
            const response = await Api.get('api/v1/token/current_user/');
            console.log(response);

            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue('User credentials are expired!')
        }
    }
)