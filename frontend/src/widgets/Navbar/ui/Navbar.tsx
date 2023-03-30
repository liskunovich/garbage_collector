import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import {Routes} from "shared/config/routeConfig";
import {AppLink} from "shared/ui/AppLink";
import {Logo, LogoTheme} from "widgets/Logo";
import {ProfileButton} from "widgets/ProfileButton";

interface NavbarProps {
    className?: string;
    logoTheme?: LogoTheme;
}

export const Navbar = ({className, logoTheme}: NavbarProps) => {
    console.log(Routes)
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Logo theme={logoTheme}/>
            <div className={cls.navbarRight}>
                <div className={cls.links}>
                    {Object.entries(Routes).map(([key, {name, path}]) => {
                        return (
                            <AppLink key={key} to={path}>{name}</AppLink>
                        )
                    })}
                </div>
                <ProfileButton/>
            </div>
        </div>
    );
};
