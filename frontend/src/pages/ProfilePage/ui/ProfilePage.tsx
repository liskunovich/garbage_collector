import React from 'react';
import {Layout} from "widgets/Layout";
import {ContentBlock, ContentBlockStyle, ContentBlockVariants} from "shared/ui/ContentBlock";
import cls from './ProfilePage.module.scss';
import {Input} from "shared/ui/Input";
import {Button} from "shared/ui/Button";
import {LogoTheme} from "widgets/Logo";
import {useSelector} from "react-redux";
import {getUserData} from "entities/User";
import {useNavigate} from "react-router-dom";
import {RoutePath} from "shared/config/routeConfig";

const ProfilePage = () => {

    const {glass, carton, plastic, username, email} = useSelector(getUserData);
    const navigate = useNavigate();

    return (
        <Layout logoTheme={LogoTheme.LIGHT}>
            <ContentBlock className={cls.ProfilePageContent} variant={ContentBlockVariants.SECONDARY} borderStyle={ContentBlockStyle.BOTTOM_ROUNDED}>
                <div className={cls.ProfilePage}>
                    <div className={cls.profileData}>
                        <div className={cls.avatar}>
                            <img src={'http://placehold.it/900x900'}/>
                            <Button>Edit image</Button>
                        </div>
                        <div className={cls.results}>
                            <div className={cls.result}>
                                <h4>{carton} kg</h4>
                                <p>Paperboard</p>
                            </div>
                            <div className={cls.result}>
                                <h4>{glass} kg</h4>
                                <p>glass</p>
                            </div>
                            <div className={cls.result}>
                                <h4>{plastic} kg</h4>
                                <p>plastic</p>
                            </div>
                        </div>
                    </div>
                    <div className={cls.profileContacts}>
                        <Input label={'Username'} value={username} disabled/>
                        <Input label={'Gmail'} value={email} disabled/>
                    </div>
                    <div className={cls.profileActions}>
                        <Button>Change password</Button>
                        <Button onClick={() => navigate(RoutePath.rating)}>Rating</Button>
                    </div>
                </div>
            </ContentBlock>
            <ContentBlock className={cls.achivmentsBlock}>
                <h2>Achievements</h2>
                <div className={cls.achivments}>Will be soon</div>
            </ContentBlock>
        </Layout>
    );
};

export default ProfilePage;