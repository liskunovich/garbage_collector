import React, {Suspense, useEffect} from 'react';
import './styles/index.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTheme} from 'app/providers/ThemeProvider';
import {AppRouter} from 'app/providers/router';
import {useAppDispatch} from "shared/hooks/useAppDispatch";
import {getCurrentUser, getUserData, getUserIsAuth, userActions} from "entities/User";
import {useSelector} from "react-redux";

const App = () => {
    const {theme} = useTheme();
    const dispatch = useAppDispatch();
    const isAuth = useSelector(getUserIsAuth);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [])

    useEffect(() => {
        if (isAuth) {
            dispatch(getCurrentUser());
        }
    }, [isAuth])

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={''}>
                <div className={'page-wrapper'}>
                    <div className={'content-page'}>
                        <AppRouter/>
                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
