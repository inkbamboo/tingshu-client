const { http } = uni.$uv
function doGetRequest (url,params = {}, config = {}){
	params.channel=config.channel
	return http.get(url, params, config);
}
function doPostRequest (url,params = {}, config = {}){
	params.channel=config.channel
	return http.post(url, params, config);
}
export const  getTabList = (params = {}, config = {}) => doGetRequest('/v1/book/tabList', params, config);
export const  getListByTab = (params = {}, config = {}) => doGetRequest('/v1/book/listByTab', params, config);
export const  getIndexList = (params = {}, config = {}) => doGetRequest('/v1/book/indexList', params, config);
export const  search = (params = {}, config = {}) => doGetRequest('/v1/book/search', params, config);
export const  getBookInfo = (params = {}, config = {}) => doGetRequest('/v1/book/bookInfo', params, config);
