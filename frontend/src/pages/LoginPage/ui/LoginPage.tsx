import React from 'react';
import {ContentBlock, ContentBlockStyle, ContentBlockVariants} from "shared/ui/ContentBlock";
import cls from './LoginPage.module.scss';
import {Input} from "shared/ui/Input";
import {AppLink} from "shared/ui/AppLink";
import {AppLinkStyle} from "shared/ui/AppLink/AppLink";
import {Button} from "shared/ui/Button";
import {RoutePath} from "shared/config/routeConfig";
import {LoginForm} from "features/Login";

const LoginPage = () => {
    return (
        <ContentBlock className={cls.LoginPage} variant={ContentBlockVariants.SECONDARY} borderStyle={ContentBlockStyle.BOTTOM_ROUNDED}>
            <div className={cls.poster}>
                <img src="../images/login-poster.png" alt=""/>
            </div>
            <div className={cls.content}>
                <h1>Sign in</h1>
                <LoginForm/>
                <p>don't have an account yet? <AppLink to={RoutePath.registration} variant={AppLinkStyle.UNDERLINE}>Sign up</AppLink></p>
            </div>
        </ContentBlock>
    );
};

export default LoginPage;