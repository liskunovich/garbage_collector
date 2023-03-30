import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('test')).toBe('test');
    });
    test('with first and optional classes', () => {
        expect(classNames('test', { one: true, two: false, three: true })).toBe('test one three');
    });
    test('with first and additional classes', () => {
        expect(classNames('test', {}, ['one', 'two', 'three'])).toBe('test one two three');
    });
    test('with all params', () => {
        expect(classNames('test', { a: true, b: false, c: true }, ['one', 'two', 'three'])).toBe('test one two three a c');
    });
});
