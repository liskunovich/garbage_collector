import React from 'react';
import cls from './MainPage.module.scss';
import {useTranslation} from 'react-i18next';
import {SmallTalkBlock} from "widgets/SmallTalkBlock";
import {ImportantBlock} from "widgets/ImportantBlock";
import {MapBlock} from "widgets/MapBlock";
import {WhatIsNewBlock} from "widgets/WhatIsNewBlock";
import {Layout} from "widgets/Layout";
import {LogoTheme} from "widgets/Logo";

const MainPage = () => {
    const {t} = useTranslation();

    return (
        <Layout logoTheme={LogoTheme.DARK}>
            <div className={cls.MainPage}>
                <SmallTalkBlock/>
                <ImportantBlock/>
                <MapBlock/>
                <WhatIsNewBlock/>
            </div>
        </Layout>
    );
};

export default MainPage;
