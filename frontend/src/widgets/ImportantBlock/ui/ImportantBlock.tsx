import React from 'react';
import cls from './ImportantBlock.module.scss';
import {classNames} from "shared/lib/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink";
import {ContentBlock, ContentBlockStyle} from "shared/ui/ContentBlock";
import {Slider} from "widgets/Slider";

const ImportantBlock = () => {
    return (
        <ContentBlock borderStyle={ContentBlockStyle.BOTTOM_ROUNDED} className={classNames(cls.ImportantBlock)}>
            <div className={cls.left}>
                <h2>Why is this so important?</h2>
                <p>Proper waste sorting can reduce the amount of waste that ends up in landfills, conserve resources,
                    and prevent environmental pollution.</p>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>Read more...</AppLink>
            </div>
            <div className={cls.right}>
                <Slider/>
            </div>
        </ContentBlock>
    );
};

export default ImportantBlock;