import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserSchema} from "../types/userSchema";
import {LOCALSTORAGE_ACCESS_TOKEN_KEY} from "shared/consts/localstorage";
import {getCurrentUser} from "../services/getCurrentUser/getCurrentUser";

const initialState: UserSchema = {
    isAuth: !!localStorage.getItem(LOCALSTORAGE_ACCESS_TOKEN_KEY),
    username: '',
    isLoading: false,
    carton: 0,
    plastic: 0,
    glass: 0
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuth = false;
            localStorage.removeItem(LOCALSTORAGE_ACCESS_TOKEN_KEY);
        },
        setUserData: (state, action: PayloadAction<Partial<typeof initialState>>) => {
            if (action.payload.isAuth != undefined) {
                state.isAuth = action.payload.isAuth;
            }
            if (action.payload.username != undefined) {
                state.username = action.payload.username;
            }
            if (action.payload.email != undefined) {
                state.email = action.payload.email;
            }
        },
        initAuthData: (state) => {
            const token = localStorage.getItem(LOCALSTORAGE_ACCESS_TOKEN_KEY);
            if (token) {
                state.isAuth = true;
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCurrentUser.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getCurrentUser.fulfilled, (state, action) => {
            const {glass, carton, plastic, user} = action.payload;
            state.isLoading = false;
            state.isAuth = true;
            state.username = user.username;
            state.email = user.email;
            state.glass = glass;
            state.plastic = plastic;
            state.carton = carton;
        })
        builder.addCase(getCurrentUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isAuth = false;
        })
    }
})

export const {actions: userActions} = userSlice;
export const {reducer: userReducer} = userSlice;