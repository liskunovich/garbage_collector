import { classNames } from 'shared/lib/classNames/classNames';
import { Link, type LinkProps } from 'react-router-dom';
import { type FC } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

export enum AppLinkStyle {
    UNDERLINE = 'underline',
    DEFAULT = 'default'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    variant?: AppLinkStyle;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        variant = AppLinkStyle.DEFAULT,
        ...otherProps
    } = props;

    const mods = {
        [cls[theme]]: true,
        [cls[variant]]: true
    }

    const isHashLink = typeof to === 'string' && to.startsWith('#');

    return (
        <>
            {!isHashLink ? (
                <Link
                    to={to}
                    className={classNames(cls.AppLink, mods, [className])}
                    {...otherProps}
                >
                    {children}
                </Link>
            ) : <a
                href={to}
                className={classNames(cls.AppLink, mods, [className])}
            >
                {children}
            </a>}
        </>
    );
};
