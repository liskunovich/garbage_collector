import React from 'react';
import {ContentBlock, ContentBlockStyle, ContentBlockVariants} from "shared/ui/ContentBlock";
import cls from './Footer.module.scss';

const Footer = () => {
    return (
        <ContentBlock className={cls.Footer} variant={ContentBlockVariants.SECONDARY} borderStyle={ContentBlockStyle.TOP_ROUNDED}>
            © «Garbage Collector».
            All rights reserved.
        </ContentBlock>
    );
};

export default Footer;