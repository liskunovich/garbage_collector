import React, {HTMLProps} from 'react';
import cls from './Input.module.scss';
import {v4 as uuidv4} from 'uuid';
import {classNames} from "shared/lib/classNames";

interface InputProps extends HTMLProps<HTMLInputElement> {
    error?: string;
}

const Input = ({label, id, error, ...props}: InputProps) => {
    if (!id) {
        id = uuidv4();
    }
    return (
        <div className={classNames(cls.Input)}>
            <div className={classNames('', {[cls.errorOutline]: error})}></div>
            <label className={cls.label} htmlFor={id}>
                {label}
            </label>
            <div className={cls.inputWrapper}>
                <input className={classNames(cls.input)} type={'text'} id={id} {...props}/>
                {error && <p className={cls.errorText}>{error}</p>}
            </div>
        </div>
    );
};

export default Input;