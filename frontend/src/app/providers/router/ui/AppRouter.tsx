import React, {Suspense, useEffect} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {authRoutes, protectedRoutes, routeConfig, RoutePath} from 'shared/config/routeConfig';
import {PageLoader} from 'widgets/PageLoader';
import {useSelector} from "react-redux";
import {getUserData, getUserIsAuth} from "entities/User";

const AppRouter = () => {
    const isAuth = useSelector(getUserIsAuth);

    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {Object.values(authRoutes).map(({element, ...props}) => (
                    <Route
                        key={props.path}
                        element={!isAuth ? element : <Navigate to={RoutePath.profile}/>}
                        {...props}
                    />
                ))}
                {Object.values(protectedRoutes).map(({element, ...props}) => (
                    <Route
                        key={props.path}
                        element={isAuth ? element : <Navigate to={RoutePath.login}/>}
                        {...props}
                    />
                ))}
                {Object.values(routeConfig).map(({element, ...props}) => (
                    <Route
                        key={props.path}
                        element={element}
                        {...props}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
