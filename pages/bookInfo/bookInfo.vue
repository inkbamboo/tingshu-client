<template>
	<view class="book_info">
		<uv-row>
			<uv-col span="4">
				<image class="book_image" :src="pic" :lazy-load="true"></image>
			</uv-col>
			<uv-col span="6">
				<h3 class="book_info_h">{{ book.name }}</h3>
				<p class="book_info_p">作者：{{ book.author }}</p>
				<p class="book_info_p">类别：{{ book.tab_name }}</p>
				<p class="book_info_p">播音：{{ book.speaker }}</p>
				<p class="book_info_p">状态：{{ book.status }}</p>
				<p class="book_info_p">时间：{{ book.create_time }}</p>
			</uv-col>
		</uv-row>
		<view class="text-wrapper">
			<text>{{book.summary}}</text>
		</view>
		<uv-row customStyle="margin-bottom: 10px">
			<uv-col span="4">
				<view class="demo-layout bg-purple"></view>
			</uv-col>
			<uv-col span="4">
				<view class="demo-layout bg-purple-light"></view>
			</uv-col>
			<uv-col span="4">
				<view class="demo-layout bg-purple-dark"></view>
			</uv-col>
		</uv-row>
		<view v-for="(list_item,index) in chapter_list" :key="index">
			<uv-row customStyle="margin-bottom: 10px">
				<uv-col v-for="(chapter,idx) in list_item" :key="idx" span="3">
					<navigator :url="'/pages/play/play?book_id='+book.book_id+'&chapter_id='+chapter.chapter_id">
						<p>{{ chapter.name }}</p>
					</navigator>
				</uv-col>
			</uv-row>
		</view>
	</view>
</template>

<script>
	import {
		SET_BOOK,
		SET_CHAPTER_LIST
	} from '@/store/mutationTypes.js'
	import {
		getBookInfo
	} from '@/common/api.js';
	export default {
		data() {
			return {
				book: {
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
				chapter_count: 0,
				chapter_list: []
			}
		},
		async onLoad(opt) {
			this.book.book_id = opt.book_id
			this.book.tab = opt.tab
			await this.getBookInfo()
		},
		methods: {
			load() {
				this.$refs.uReadMore.init();
			},
			async getBookInfo() {
				if (this.book.book_id <= 0) {
					return
				}
				let data = await getBookInfo({
					params: {
						tab: this.book.tab,
						book_id: this.book.book_id
					}
				})
				if (data && data.book_info) {
					this.book = data.book_info
					this.chapter_count = data.book_info.chapter_count
					for (let i = 0; i < data.chapter_list.length; i++) {
						let j = Math.floor(i / 3)
						if (!this.chapter_list[j]) this.chapter_list[j] = []
						this.chapter_list[j].push(data.chapter_list[i])
					}
					console.log(this.chapter_list[0])
					this.$store.commit(SET_BOOK, data.book_info)
					this.$store.commit(SET_CHAPTER_LIST, this.chapter_list)
				}
			}
		}
	}
</script>

<style>
	.text-wrapper {
		white-space: pre-wrap;
		color: #8b8b8b;
		font-size: 12px;
		overflow: hidden;
		line-height: 20px;
		border: 25px;
		margin: 25px;
	}
</style>