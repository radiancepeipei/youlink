module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': 0,
        'semi': 0,
        'quotes': [1, 'single'],
        "eol-last": 0,
        "space-before-function-paren": 0,
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }]

    }
}