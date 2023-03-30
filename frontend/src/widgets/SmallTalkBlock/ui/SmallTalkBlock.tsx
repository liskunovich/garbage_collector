import React from 'react';
import cls from './SmallTalkBlock.module.scss';
import {Button} from "shared/ui/Button";
import {ContentBlock, ContentBlockStyle, ContentBlockVariants} from "shared/ui/ContentBlock";
import {useNavigate} from "react-router-dom";
import {RoutePath} from "shared/config/routeConfig";

const SmallTalkBlock = () => {
    const navigate = useNavigate();

    const onParticipateClick = () => navigate(RoutePath.registration);

    return (
        <ContentBlock variant={ContentBlockVariants.SECONDARY} borderStyle={ContentBlockStyle.BOTTOM_ROUNDED} className={cls.SmallTalkBlock}>
            <div className={cls.banner}>
                <img src="../images/main_block_bg.png" alt=""/>
            </div>
            <div className={cls.intro}>
                <div className={cls.content}>
                    <p className={cls.description}>
                        Proper waste sorting can reduce the amount of waste that ends up in landfills, conserve resources,
                        and prevent environmental pollution.
                    </p>
                    <Button onClick={onParticipateClick}>Participate!</Button>
                </div>
            </div>
        </ContentBlock>
    );
};

export default SmallTalkBlock;