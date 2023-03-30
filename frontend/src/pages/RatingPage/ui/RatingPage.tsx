import React, {useEffect, useState} from 'react';
import cls from './RatingPage.module.scss';
import {ContentBlock, ContentBlockStyle, ContentBlockVariants} from "shared/ui/ContentBlock";
import {AppLink} from "shared/ui/AppLink";
import {Layout} from "widgets/Layout";
import {AppLinkStyle} from "shared/ui/AppLink/AppLink";
import Api from "shared/api/axios";
import {use} from "i18next";

const RatingPage = () => {
    const [currentTab, setCurrentTab] = useState('carton');
    const [rating, setRating] = useState([]);

    console.log({rating})

    useEffect(() => {
        Api.get('api/v1/main/rating/').then((res) => {
            setRating(res.data);
        })
    }, [])

    const tabIndex = {
        carton: 2,
        glass: 0,
        plastic: 1
    }

    const tabs = [
        {
            name: 'Paperboard',
            key: 'carton',
        },
        {
            name: 'glass',
            key: 'glass',
        },
        {
            name: 'plastic',
            key: 'plastic',
        },
    ]

    return (
        <Layout>
            <ContentBlock
                variant={ContentBlockVariants.SECONDARY}
                borderStyle={ContentBlockStyle.BOTTOM_ROUNDED}
                className={cls.RatingPage}
            >
                <h1>User rating for March</h1>
                <div className={cls.tabs}>
                    {tabs.map(({name, key}) => {
                        return (
                            <AppLink
                                onClick={() => setCurrentTab(key)}
                                variant={key === currentTab ? AppLinkStyle.UNDERLINE : AppLinkStyle.DEFAULT}
                                key={key}
                                to={'.'}
                            >
                                {name}
                            </AppLink>
                        )
                    })}
                </div>
                <ul className={cls.ratingList}>
                    {rating[tabIndex[currentTab as keyof typeof tabIndex]]?.[currentTab]?.map((user: any, index: number) => {
                        return (
                            <li key={user.id} className={cls.ratingItem}>
                                <div className={cls.ratingPlace}>
                                    {index === 0 && <img src={'../images/first.png'}/>}
                                    {index === 1 && <img src={'../images/second.png'}/>}
                                    {index === 2 && <img src={'../images/third.png'}/>}
                                    <span>{index + 1}</span>
                                </div>
                                <div className={cls.ratingAvatar}>
                                    <img src="../images/avatar-rating.png" alt=""/>
                                </div>
                                <p className={cls.ratingName}>{user.username}</p>
                                <p className={cls.ratingMeasure}>{user.total} kg</p>
                            </li>
                        )
                    })}
                </ul>
            </ContentBlock>
        </Layout>
    );
};

export default RatingPage;