import React, {FC} from 'react';
import {Footer} from "widgets/Footer";
import {Navbar} from "widgets/Navbar";
import {LogoTheme} from "widgets/Logo";

interface LayoutProps {
    logoTheme?: LogoTheme;
}

const Layout: FC<LayoutProps> = ({logoTheme, children}) => {
    return (
        <div>
            <Navbar logoTheme={logoTheme}/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;