import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {StateSchema} from "../config/StateSchema";
import {loginReducer} from "features/Login";
import {userReducer} from "entities/User";
import {postsReducer} from "entities/Post";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
        loginForm: loginReducer,
        posts: postsReducer
    }

    return configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}