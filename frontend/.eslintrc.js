module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:storybook/recommended'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json']
    },
    plugins: ['react'],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-filename-extension': [1, {
            extensions: ['.js', '.jsx', '.tsx']
        }],
        'import/no-unresolved': 'off',
        'no-unused-vars': 'warn',
        indent: [2, 4],
        '@typescript-eslint/indent': [2, 4],
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        'react/prop-types': 'off',
        semi: ['error', 'always'],
        '@typescript-eslint/semi': ['error', 'always'],
        'n/handle-callback-err': 'off',
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        'react/display-name': 'off',
        '@typescript-eslint/prefer-includes': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/member-delimiter-style': ['error', {
            multiline: {
                delimiter: 'semi',
                requireLast: true
            },
            singleline: {
                delimiter: 'semi',
                requireLast: false
            },
            multilineDetection: 'brackets'
        }]
    }
};
