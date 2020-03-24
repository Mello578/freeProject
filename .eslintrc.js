module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:promise/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'prettier',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2019,
        sourceType: 'module'
    },
    plugins: ['prettier', 'react', 'react-hooks', 'promise', 'import'],
    settings: {
        react: {
            version: 'detect'
        },
    },
    rules: {
        'import/order': [
            'error',
            {
                groups: ['external', 'internal', 'unknown', 'builtin', 'parent', 'sibling', 'index'],
                'newlines-between': 'always'
            }
        ],
        'import/first': 'error',
        'prettier/prettier': 'error',
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        // 'react-hooks/exhaustive-deps': 'warn',
        'no-trailing-spaces': 'warn',
        'prefer-const': 'warn',
        'comma-dangle': ['warn', 'never'],
        curly: 'warn',
        'dot-notation': 'warn',
        'no-var': 'warn',
        'prefer-object-spread': 'warn',
        'prefer-template': 'warn',
        radix: 'warn',
        yoda: 'warn'
    }
};
