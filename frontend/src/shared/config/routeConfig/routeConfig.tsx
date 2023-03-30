import { type RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NewsPage } from 'pages/NewsPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import {LoginPage} from "pages/LoginPage";
import {RegistrationPage} from "pages/RegistrationPage";
import {ProfilePage} from "pages/ProfilePage";
import {RatingPage} from "pages/RatingPage";

export enum AppRoute {
    Main = 'main',
    News = 'news',
    Login = 'login',
    Registration = 'registration',
    Profile = 'profile',
    Rating = 'rating',
    NotFound = 'not_found'
}

export const RoutePath: Record<AppRoute, string> = {
    [AppRoute.Main]: '/',
    [AppRoute.News]: '/news',
    [AppRoute.Login]: '/login',
    [AppRoute.Registration]: '/registration',
    [AppRoute.Profile]: '/profile',
    [AppRoute.Rating]: '/rating',
    [AppRoute.NotFound]: '*',
};

export const Routes = {
    [AppRoute.Main]: {
        name: 'Main',
        path: RoutePath[AppRoute.Main]
    },
    Map: {
        name: 'Point of issue',
        path: '#map'
    },
    [AppRoute.News]: {
        name: 'News',
        path: RoutePath[AppRoute.News]
    },
} as const;

type ExcludedRoutes = AppRoute.Login | AppRoute.Registration | AppRoute.Profile | AppRoute.Rating;

export const routeConfig: Record<Exclude<AppRoute, ExcludedRoutes>, RouteProps> = {
    [AppRoute.Main]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRoute.News]: {
        path: RoutePath.news,
        element: <NewsPage/>
    },
    [AppRoute.NotFound]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    }
};

export const protectedRoutes = {
    [AppRoute.Profile]: {
        path: RoutePath.profile,
        element: <ProfilePage/>
    },
    [AppRoute.Rating]: {
        path: RoutePath.rating,
        element: <RatingPage/>
    }
}

export const authRoutes = {
    [AppRoute.Login]: {
        path: RoutePath.login,
        element: <LoginPage/>
    },
    [AppRoute.Registration]: {
        path: RoutePath.registration,
        element: <RegistrationPage/>
    },
}