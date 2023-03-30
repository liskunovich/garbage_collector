import { lazy } from 'react';

export const NewsPageAsync = lazy(async () => await new Promise((resolve) => {
    // @ts-expect-error
    setTimeout(() => { resolve(import('./NewsPage')); }, 1500);
}));
