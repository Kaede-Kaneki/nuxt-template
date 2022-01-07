module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false
    },
    extends: [
        // '@nuxtjs',
        'plugin:nuxt/recommended'
    ],
    plugins: [],
    // add your custom rules here
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        eqeqeq: 'error', // 必须使用全等
        'no-alert': 'error', // 禁止使用alert confirm prompt
        'no-extra-semi': 'error', // 禁止多余的冒号
        'no-var': 'error', // 禁用var，用let和const代替
        camelcase: 'error' // 强制驼峰法命名
    }
}
