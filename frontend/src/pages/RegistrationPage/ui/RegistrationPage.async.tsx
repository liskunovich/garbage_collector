import { lazy } from 'react';

export const RegistrationPageAsync = lazy(async () => await new Promise((resolve) => {
    // @ts-expect-error
    setTimeout(() => { resolve(import('./RegistrationPage')); }, 1500);
}));
