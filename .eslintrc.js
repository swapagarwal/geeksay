module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },
    extends: ['eslint:recommended', 'airbnb-base'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
    },
    rules: {
        // Emit warnings until a ruleset is agreed upon to limit the number of errors reported
        'brace-style': 'warn',
        'indent': ['warn', 4],
        'no-bitwise': 'warn',
        'no-dupe-keys': 'warn',
        'no-else-return': 'warn',
        'no-multi-spaces': 'warn',
        'no-prototype-builtins': 'warn',
        'no-restricted-globals': 'warn',
        'no-tabs': 'warn',
        'no-trailing-spaces': 'warn',
        'no-undef': 'warn',
        'no-unused-vars': 'warn',
        'no-use-before-define': 'warn',
        'padded-blocks': 'warn',
        'prefer-template': 'warn',
        'quote-props': 'warn',
        'quotes': 'warn',
        'radix': 'warn',
        'semi': 'warn',
    },
};
