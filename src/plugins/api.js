const local = '/local'
export default ({ app: { $curl } }, inject) => {
    const api = {
        reqMd: (data)=>{return $curl.get(`${local}/doc/md1`,data)}
    }
    inject('api', api)
}
