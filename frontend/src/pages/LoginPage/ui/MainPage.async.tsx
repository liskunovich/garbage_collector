import { lazy } from 'react';

export const LoginPageAsync = lazy(async () => await new Promise((resolve) => {
    // @ts-expect-error
    setTimeout(() => { resolve(import('./LoginPage')); }, 1500);
}));
