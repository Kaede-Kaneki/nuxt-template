import { Message } from "element-ui";

export default function ({app:{$axios} },inject) {
    $axios.interceptors.request.use(
        config => {
            const {url, method, params, data} = config
            console.log(`${url} [${method}] 请求参数=>`, method === 'get' ? params : data)
            return config
        },
        error => {
            console.log('request error => ', error)
            return Promise.reject(error)
        }
    )
    $axios.interceptors.response.use(
        response => {
            return new Promise((resolve, reject) => {
                console.log('response success => ', response)
                const {data: respData} = response  //解构赋值 将response中data重命名为respData
                const {data, success, msg, status} = respData //解构respData
                if (success) return resolve(data)
                if (status) return resolve(data)
                else {
                    Message.error(msg || '请求报错')
                    reject(msg || '请求报错')
                }
            })
        },
        error => {
            return new Promise((resolve, reject) => {
                Message.error('请求超时')
                reject(error.response.statusText)
            })
        }
    )

    let requestList = {}
    let methods = ['get', 'post', 'put', 'delete']
    methods.forEach(method => {
        let dataKey = method === 'get' ? 'params' : 'data'
        requestList[method] = function(url, data) {
            return $axios({
                method,
                url,
                [dataKey]: data
            }).catch(err => {
                console.error(err)
                return {
                    s: 0,
                    d: {},
                    errors: [err]
                }
            })
        }
    })
    inject('curl', requestList)
}


