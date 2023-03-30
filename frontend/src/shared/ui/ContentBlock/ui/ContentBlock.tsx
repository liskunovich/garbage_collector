import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './ContentBlock.module.scss';

export enum ContentBlockVariants {
    DEFAULT = 'default',
    SECONDARY = 'secondary'
}

export enum ContentBlockStyle {
    ROUNDED = 'rounded',
    TOP_ROUNDED = 'top-rounded',
    BOTTOM_ROUNDED = 'bottom-rounded',
}

interface ContentBlockProps {
    className?: string;
    variant?: ContentBlockVariants;
    borderStyle?: ContentBlockStyle;
}

const ContentBlock: FC<ContentBlockProps> = ({
                                                 className,
                                                 children,
                                                 variant = ContentBlockVariants.DEFAULT,
                                                 borderStyle = ContentBlockStyle.ROUNDED
                                             }) => {

    const mods: Record<string, boolean> = {
        [cls[variant]]: true,
        [cls[borderStyle]]: true,
    };

    return (
        <div className={classNames(cls.ContentBlock, mods, [className])}>
            {children}
        </div>
    );
};

export default ContentBlock;