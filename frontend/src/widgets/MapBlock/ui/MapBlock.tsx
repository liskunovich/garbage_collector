import React from 'react';
import {ContentBlock, ContentBlockStyle, ContentBlockVariants} from "shared/ui/ContentBlock";
import cls from './MapBlock.module.scss';
import {Button} from "shared/ui/Button";

const MapBlock = () => {

    const handleBuildRoute = () => window.open('https://www.google.com/maps/dir//%D0%BF%D1%80%D0%BE%D1%81%D0%BF.+%D0%90%D0%B1%D0%B0%D1%8F+152+%D0%A3%D1%81%D1%82%D1%8C-%D0%9A%D0%B0%D0%BC%D0%B5%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA+070000+%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD/@49.9869577,82.6439673,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x42eb46612552cf41:0xec40585f50fdf65c!2m2!1d82.6439673!2d49.9869577', '_blank')

    return (
        <ContentBlock className={cls.MapBlock} variant={ContentBlockVariants.SECONDARY} borderStyle={ContentBlockStyle.ROUNDED}>
            <div id={'map'} className={cls.left}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.1771899570617!2d82.64177861567083!3d49.98695767941407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42eb46612552cf41%3A0xec40585f50fdf65c!2z0L_RgNC-0YHQvy4g0JDQsdCw0Y8gMTUyLCDQo9GB0YLRjC3QmtCw0LzQtdC90L7Qs9C-0YDRgdC6IDA3MDAwMCwg0JrQsNC30LDRhdGB0YLQsNC9!5e1!3m2!1sru!2shu!4v1680210958769!5m2!1sru!2shu"
                    width="600" height="100%" style={{border: 0}} loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className={cls.right}>
                <div className={cls.content}>
                    <h2>Where can I find <br/> collection points?</h2>
                    <p>Proper waste sorting can reduce the amount of waste that ends up in landfills, conserve resources,
                        and prevent environmental pollution.</p>
                    <Button onClick={handleBuildRoute}>build a route</Button>
                </div>
            </div>
        </ContentBlock>
    );
};

export default MapBlock;