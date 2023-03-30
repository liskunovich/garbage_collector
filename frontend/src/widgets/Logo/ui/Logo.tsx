import React from 'react';
import cls from "./Logo.module.scss";
import {classNames} from "shared/lib/classNames";
import LogoIcon from '../../../../public/images/logo.svg';

export enum LogoTheme {
    LIGHT = 'light',
    DARK = 'dark',
}

interface LogoProps {
    theme?: LogoTheme;
}

const Logo = ({theme = LogoTheme.LIGHT}: LogoProps) => {
    return (
        <div className={classNames(cls.Logo, {[cls[theme]]: true})}>
            <LogoIcon className={cls.logoIcon}/>
            <p className={cls.logoText}>Garbage<br/>Collector</p>
        </div>
    );
};

export default Logo;