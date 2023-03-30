import React, {useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ContentBlock, ContentBlockStyle, ContentBlockVariants} from "shared/ui/ContentBlock";
import cls from './NewsPage.module.scss';
import {Pagination} from "widgets/Pagination";
import {Layout} from "widgets/Layout";
import {getPostsData, NewsCard, postsActions} from "entities/Post";
import {useSelector} from "react-redux";
import {useAppDispatch} from "shared/hooks/useAppDispatch";
import {getPosts} from "entities/Post/model/services/getPosts/getPosts";
import dayjs from "dayjs";
import {Loader} from "shared/ui/Loader";

const NewsPage = () => {
    const { t } = useTranslation('about');
    const [currentPage, setCurrentPage] = useState(18);
    const dispatch = useAppDispatch();
    const titleRef = useRef<HTMLHeadingElement>(null);

    const {posts, isLoading, totalPages, page} = useSelector(getPostsData);

    const onPageChange = (page: number) => {
        dispatch(postsActions.setPage(page));
    }

    useEffect(() => {
        dispatch(getPosts({page}));
        if (titleRef.current) {
            titleRef.current.scrollIntoView({behavior: 'smooth'})
        }
    }, [page])

    console.log({page, totalPages})

    return (
        <Layout>
            <div className={cls.NewsPage}>
                <ContentBlock className={cls.content} borderStyle={ContentBlockStyle.BOTTOM_ROUNDED} variant={ContentBlockVariants.SECONDARY}>
                    <h1 ref={titleRef} className={cls.title}>Our news</h1>
                    <div className={cls.newsList}>

                                {posts.map(({created, text, title, url}) => {
                                    return <NewsCard
                                        key={url}
                                        img={'../images/dummy.png'}
                                        date={dayjs(created).format('MMMM, MM YYYY')}
                                        title={title}
                                        text={text}
                                        url={url}
                                    />
                                })}
                    </div>
                </ContentBlock>
                <div className={cls.pagination}>
                    <Pagination currentPage={page} totalPages={totalPages} onPageChange={onPageChange}/>
                </div>
            </div>
        </Layout>
    );
};

export default NewsPage;
