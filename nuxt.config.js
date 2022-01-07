export default {
    srcDir: 'src', //定义router路径

    // 定义启动端口
    server:{
        port:'4000',
        host:'localhost'
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'nuxt-template',
        htmlAttrs: { lang: 'en' },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport',content: 'width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover' },
            { hid: 'description',name: 'description',content: '' },
            { name: 'format-detection',content: 'telephone=no' }
        ],
        link: [ { rel: 'icon',type: 'image/x-icon',href: '/favicon.ico' } ],
        script:[ {src: 'js/flexible.js'} ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'element-ui/lib/theme-chalk/index.css',
        'src/assets/scss/base.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/element-ui',
        '@/plugins/axios',
        '@/plugins/api'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/router'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios'
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        // baseURL: '/',
        proxy: true,
    },

    proxy:{
        '/local':{
            target: 'http://localhost:3000', //后台接口域名
            ws:false,       //如果要代理 websockets，配置这个参数
            secure: false,  // 如果是https接口，需要配置这个参数
            changeOrigin:true, //是否跨域
            pathRewrite:{
                '^/local':'' //路径重写
            }
        },
        '/poems':{
            target: 'https://v2.jinrishici.com',//后台接口域名
            ws:false,       //如果要代理 websockets，配置这个参数
            secure: true,  // 如果是https接口，需要配置这个参数
            changeOrigin:true, //是否跨域
            pathRewrite:{
                '^/poems':'' //路径重写
            }
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [/^element-ui/]
    }
}
