import React, {ChangeEvent, FormEvent, memo, useCallback} from 'react';
import cls from "pages/LoginPage/ui/LoginPage.module.scss";
import {Input} from "shared/ui/Input";
import {Button} from "shared/ui/Button";
import {loginActions} from "../../model/slice/loginSlice";
import {useSelector} from "react-redux";
import {getLoginState} from "../../model/selectors/getLoginState/getLoginState";
import {loginByUsername} from "features/Login";
import {useAppDispatch} from "shared/hooks/useAppDispatch";

const LoginForm = memo(() => {

    const {setUsername, setPassword} = loginActions;
    const dispatch = useAppDispatch();

    const {username, password, isLoading, error} = useSelector(getLoginState);

    const onChangeUsername = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setUsername(event.target.value));
    }, [dispatch])

    const onChangePassword = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setPassword(event.target.value));
    }, [dispatch])

    const onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(loginByUsername({password, username}))
    }, [dispatch, username, password])

    return (
        <form onSubmit={onSubmit} className={cls.form}>
            <div className={cls.formField}>
                <Input
                    error={error}
                    onChange={onChangeUsername}
                    value={username}
                    label={'Username'}
                    placeholder={'Petya'}
                />
            </div>
            <div className={cls.formField}>
                <Input
                    error={error}
                    onChange={onChangePassword}
                    value={password}
                    label={'Password'}
                    type={'password'}
                    placeholder={'*************'}
                />
            </div>
            <div className={cls.formFooter}>
                <Button disabled={isLoading} type={'submit'}>Sign in</Button>
            </div>
        </form>
    );
});

export default LoginForm;