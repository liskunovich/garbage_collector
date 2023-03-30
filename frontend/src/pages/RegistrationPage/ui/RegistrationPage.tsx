import React from 'react';
import {ContentBlock, ContentBlockStyle, ContentBlockVariants} from "shared/ui/ContentBlock";
import cls from './RegistrationPage.module.scss';
import {Input} from "shared/ui/Input";
import {AppLink} from "shared/ui/AppLink";
import {AppLinkStyle} from "shared/ui/AppLink/AppLink";
import {Button} from "shared/ui/Button";
import {RoutePath} from "shared/config/routeConfig";

const RegistrationPage = () => {
    return (
        <ContentBlock className={cls.RegistrationPage} variant={ContentBlockVariants.SECONDARY} borderStyle={ContentBlockStyle.BOTTOM_ROUNDED}>
            <div className={cls.poster}>
                <img src="../images/login-poster.png" alt=""/>
            </div>
            <div className={cls.content}>
                <h1>Create an account</h1>
                <form className={cls.form}>
                    <div className={cls.formField}>
                        <Input label={'Username'} placeholder={'Petya'}/>
                    </div>
                    <div className={cls.formField}>
                        <Input label={'Password'} type={'password'} placeholder={'*************'}/>
                    </div>
                    <div className={cls.formField}>
                        <Input label={'Password'} type={'password'} placeholder={'*************'}/>
                    </div>
                    <div className={cls.formFooter}>
                        <Button type={'submit'}>Sign up</Button>
                    </div>
                </form>
                <p>already have an account? <AppLink to={RoutePath.login} variant={AppLinkStyle.UNDERLINE}>Sign in</AppLink></p>
            </div>
        </ContentBlock>
    );
};

export default RegistrationPage;