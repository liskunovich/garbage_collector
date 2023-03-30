import React, {useEffect} from 'react';
import {ContentBlock} from "shared/ui/ContentBlock";
import cls from './WhatIsNewBlock.module.scss';
import {Button} from "shared/ui/Button";
import {useNavigate} from "react-router-dom";
import {RoutePath} from "shared/config/routeConfig";
import {getPosts} from "entities/Post/model/services/getPosts/getPosts";
import {useAppDispatch} from "shared/hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {getPostsData, NewsCard} from "entities/Post";
import dayjs from "dayjs";

const WhatIsNewBlock = () => {

    const navigate = useNavigate();
    const {page, posts} = useSelector(getPostsData);

    const handleReadAllClick = () => navigate(RoutePath.news);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPosts({page}));
    }, [page])

    return (
        <ContentBlock className={cls.WhatIsNewBlock}>
            <h2>What’s new?</h2>
            <div className={cls.cards}>
                {posts.slice(0, 4).map(({created, text, title, url}) => {
                    return <NewsCard
                        key={url}
                        img={'../images/dummy.png'}
                        date={dayjs(created).format('MMMM, DD YYYY')}
                        title={title}
                        text={text}
                        url={url}
                    />
                })}
            </div>
            <div className={cls.bottom}>
                <Button onClick={handleReadAllClick}>Read all</Button>
            </div>
        </ContentBlock>
    );
};

export default WhatIsNewBlock;