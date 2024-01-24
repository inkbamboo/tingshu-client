<template>
	<view>
		<uv-search :clearabled="true" :showAction="false" v-model="keyword" @search="search"
			@custom="search"></uv-search>
		<uv-tabs :list="tabList" @click="tabChange"></uv-tabs>
		<bookList v-if="recommendList.length>0" :list="recommendList" tabName="热门推荐" :isSample="true"></bookList>
		<bookList v-if="newList.length>0" :list="newList" tabName="新书推荐" :isSample="true"></bookList>
		<bookList v-if="tabBookList.length>0" :list="tabBookList" :tabName="curTab.name" :isSample="isSample"></bookList>
		<uv-tabbar @change="tabbarChange" :fixed="true" :placeholder="true" :safeAreaInsetBottom="true">
			<uv-tabbar-item text="首页" icon="home"></uv-tabbar-item>
			<uv-tabbar-item text="播放" icon="play-right"></uv-tabbar-item>
			<uv-tabbar-item text="我的" icon="account"></uv-tabbar-item>
		</uv-tabbar>
	</view>
</template>

<script>
	import config from '@/common/config.js';
	import {
		getListByTab,
		getIndexList,
		search
	} from '@/common/api.js';
	import bookList from '@/components/bookList/bookList.vue';

	export default {
		components: {
			bookList,
		},
		data() {
			return {
				isSample:config.isSample,
				newList: [],
				recommendList: [],
				tabBookList: [],
				keyword: "",
				tabList: [],
				curPage: 1,
				totalPage: 1,
				curTab: {}
			}
		},
		async onLoad() {
			await this.getIndexList()
		},
		methods: {
			async tabChange(tabInfo) {
				this.curTab = tabInfo
				this.resetBookList()
				await this.getBookList()
			},
			tabbarChange(barIndex) {
				console.log("*******tabbarChange", barIndex)
			},
			async search(keyword) {
				this.resetBookList()
				this.curTab = this.tabList[0]
				let data = await search({
					params: {
						keyword: keyword || this.keyword,
						page: 1
					}
				})
				if (data && data.list) {
					this.tabBookList = data.list
				}
			},
			async getBookList() {
				if (this.totalPage < this.curPage) {
					return
				}
				if (this.curTab && this.curTab.key) {
					await this.getListByTab(this.curTab, this.curPage)
					this.curPage++
				} else {
					await this.getIndexList()
					this.curPage++
				}
			},
			resetBookList() {
				this.recommendList = []
				this.newList = []
				this.tabBookList = []
				this.curPage = 1
				this.totalPage = 1
			},
			async getListByTab(tabInfo, page) {
				let data = await getListByTab({
					params: {
						tab: tabInfo.key,
						page
					}
				})
				if (data && data.list) {
					this.tabBookList = data.list
					this.totalPage = data.total_count
				}
			},
			async getIndexList() {
				let data = await getIndexList()

				if (!data) return
				if (data.new_list) {
					this.newList = data.new_list
				}
				if (data.recommend_list) {
					this.recommendList = data.recommend_list
				}
				if (data.tab_list) {
					this.tabList = data.tab_list
				}
				this.tabList.unshift({
					"name": "推荐",
					"key": ""
				})
			},
		}
	}
</script>

<style lang="scss">
	.list {
		display: grid;
		grid-template-rows: repeat(auto-fill, 100px);
	}
</style>