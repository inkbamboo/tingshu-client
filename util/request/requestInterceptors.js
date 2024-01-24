/**
 * 请求拦截
 * @param {Object} http
 */
import config from '@/common/config'
export const requestInterceptors = (vm) => {
    uni.$uv.http.interceptors.request.use((cfg) => { // 可使用async await 做异步操作
        // 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
        cfg.data = cfg.data || {}
		cfg.params=cfg.params || {}
		cfg.params.channel=config.channel
        // 可以在此通过vm引用vuex中的变量，具体值在vm.$store.state中
        // console.log(vm.$store.state);
        return cfg
    }, (cfg) => // 可使用async await 做异步操作
        Promise.reject(cfg))
}
 