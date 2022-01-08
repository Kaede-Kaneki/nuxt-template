import Vue from "vue";

// 扩展前端监控
Vue.config.errorHandler=(err, vm, info)=>{
    //msg 若为空，msg.null会报错
    const msg = err && typeof err === 'object' ? err.msg || err.errorMsg || err.message || JSON.stringify(err) : `${err}`
    console.log("errorHandler =>",msg, info)
}
