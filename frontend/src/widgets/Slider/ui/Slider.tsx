import React, {useRef, useState} from 'react';
import cls from './Slider.module.scss';
import HeartIcon from '../../../../public/images/heart.svg';
import {classNames} from "shared/lib/classNames";

const SLIDES_GAP = 30;

const sliderContent = [
    {
        title: 'Our health',
        text: 'Improving the environment in the city where you and your family live. And that means improving our own health.'
    },
    {
        title: 'Care for the environment',
        text: 'When we cut down forests, this leads to a deterioration in the climate, the extinction of animals. Recycling helps to avoid negative',
    },
    {
        title: 'Optimization',
        text: 'By reusing products, we keep natural resources longer and ensure their optimal use.',
    },
    {
        title: 'Caring for the future',
        text: 'By recycling garbage, we care about the future of the earth and our future generations who will live after us.\n'
    },
    {
        title: 'Global warming',
        text: 'By recycling garbage, we prevent global warming, which can harm our planet.'
    },
    {
        title: 'Responsibility',
        text: 'By participating in the recycling of garbage, we become more responsible for our planet and our actions in life.'
    }
]

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [translate, setTranslate] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);
    const slideRef = useRef<HTMLDivElement>(null);

    const handleChangeSlide = (slide: number) => {
        setCurrentSlide(slide);
        setTranslate((slideWidth + SLIDES_GAP) * slide * 2);
    }

    const slides = [0, 1, 2];

    return (
        <div className={cls.Slider}>
            <div
                className={cls.line}
                style={{
                    transform: `translateX(-${translate}px)`,
                    transition: 'transform 0.5s linear'
                }}
            >
                {sliderContent.map(({title, text}) => {
                    return (
                        <div
                            key={title}
                            ref={(ref) => {
                                if (ref) {
                                    setSlideWidth(ref.clientWidth);
                                }
                            }}
                            className={cls.slide}
                        >
                            <div className={cls.slideIcon}>
                                <HeartIcon/>
                            </div>
                            <h4 className={cls.slideTitle}>{title}</h4>
                            <p className={cls.slideText}>
                                {text}
                            </p>
                        </div>
                    )
                })}
            </div>
            <div className={cls.controls}>
                {slides.map((_, index) => {
                    return <div
                        key={index}
                        onClick={() => handleChangeSlide(index)}
                        className={classNames(cls.dot, {[cls.active]: index === currentSlide})}
                    />
                })}
            </div>
        </div>
    );
};

export default Slider;