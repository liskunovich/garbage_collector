import React from 'react';
import cls from './NewsCard.module.scss';
import {Button} from "shared/ui/Button";

interface NewsCardProps {
    img: string;
    date: string;
    title: string;
    text: string;
    url: string;
}

const NewsCard = ({img, url, text, title, date}: NewsCardProps) => {

    const handleOpenUrl = () => window.open(url, '_blank');

    return (
        <article className={cls.NewsCard}>
            <div className={cls.image}>
                <img src={img} alt=""/>
            </div>
            <div className={cls.content}>
                <time className={cls.date}>{date}</time>
                <h3 className={cls.heading}>{title}</h3>
                <div className={cls.descriptionWrapper}>
                    <p className={cls.description}>
                        {text}
                    </p>
                </div>
                <div className={cls.footer}>
                    <Button onClick={handleOpenUrl}>Read more...</Button>
                </div>
            </div>
        </article>
    );
};

export default NewsCard;