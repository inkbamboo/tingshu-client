import {
	SET_BOOK,
	GET_BOOK,
	SET_CHAPTER_LIST,
	GET_CHAPTER_LIST
} from './mutationTypes.js'
import {
	createStore
} from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
	state() {
		return {
			$userInfo: {
				id: 1
			},
			$book: {
				tab: "",
				book_id: 0,
				author: "",
				create_time: "",
				name: "",
				pic: "",
				speaker: "",
				status: "",
				summary: "未知",
				tab_name: "",
			},
			$chapter_list: []
		}
	},
	mutations: {
		[SET_BOOK](state, book) {
			state.$book = book
		},
		[SET_CHAPTER_LIST](state, chapter_list) {
			state.$chapter_list = chapter_list
		}
	},
	getters: {
		[GET_BOOK](state) {
			return state.$book
		},
		[GET_CHAPTER_LIST](state) {
				return state.$chapter_list
		}
	}
})

export default store