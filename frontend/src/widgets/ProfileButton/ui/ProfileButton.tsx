import React, {useMemo, useState} from 'react';
import ProfileIcon from '../../../../public/images/profile-circle.svg';
import cls from './ProfileButton.module.scss';
import {classNames} from "shared/lib/classNames";
import {AppRoute, RoutePath} from "shared/config/routeConfig/routeConfig";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getUserIsAuth, userActions} from "entities/User";
import {useAppDispatch} from "shared/hooks/useAppDispatch";

const MENU_ITEM_HEIGHT = 40;

const ProfileButton = () => {

    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const isAuth = useSelector(getUserIsAuth);
    const dispatch = useAppDispatch();

    const menuItems = useMemo(() => {
        return isAuth ? [
            {
                text: 'Profile',
                path: RoutePath.profile
            },
            {
                text: 'Logout',
                fn: () => dispatch(userActions.logout())
            },
        ] : [
            {
                text: 'Sign in',
                path: RoutePath.login
            },
            {
                text: 'Sign up',
                path: RoutePath.registration
            },
        ]
    }, [isAuth])


    const handleToggleMenu = () => setOpen(prev => !prev);

    const handleMenuItemClick = (path: string | undefined, fn: () => void | undefined) => {
        if (path !== undefined) {
            navigate(path);
        } else {
            fn();
        }
    }

    return (
        <div
            onClick={handleToggleMenu}
            className={
                classNames(
                    cls.ProfileButton,
                    {[cls.open]: open}
                )
            }
        >
            <div
                style={{
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    paddingRight: '4px'
                }}
            >
                <ProfileIcon width={'24px'} height={'24px'}/>
            </div>
            <ul
                className={cls.menu}
                style={{
                    height: open ? MENU_ITEM_HEIGHT * 2 : 0,
                    opacity: open ? 1 : 0,
                    transition: 'all 0.2s linear',
                    transformOrigin: 'bottom'
                }}
            >
                {menuItems.map(({text, path, fn}) => {
                    return (
                        <li
                            key={path}
                            onClick={() => handleMenuItemClick(path, fn)}
                            className={cls.menuItem}
                        >
                            {text}
                        </li>
                    )
                })}

            </ul>
        </div>
    );
};

export default ProfileButton;