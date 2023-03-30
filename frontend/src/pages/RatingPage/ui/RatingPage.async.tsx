import { lazy } from 'react';

export const RatingPageAsync = lazy(async () => await new Promise((resolve) => {
    // @ts-expect-error
    setTimeout(() => { resolve(import('./RatingPage')); }, 1500);
}));
