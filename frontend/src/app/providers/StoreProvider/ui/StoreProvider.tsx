import React, {ReactNode} from 'react';
import {Provider} from "react-redux";
import {createReduxStore} from "../config/store";
import {StateSchema} from "../config/StateSchema";

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateSchema
}
const store = createReduxStore();

export type AppDispatch = typeof store.dispatch;

const StoreProvider = ({children}: StoreProviderProps) => {


    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;