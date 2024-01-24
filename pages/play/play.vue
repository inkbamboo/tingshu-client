<template>
	<view class="">
		<image class="book_image" :src="pic" :lazy-load="true"></image>
		<view class="content">
			<le-audio :activeIndex="audioActiveIndex" :audioData="audioList" :autoplay="true"
				:showAudioListIcon="showAudioListIcon" :showAudioSpeedIcon="showAudioSpeedIcon"
				@onOpenAudioList="onOpenAudioList" @onAudioChange="onAudioChange"></le-audio>
		</view>
	</view>
	
</template>

<script>
	import config from '@/common/config.js';
	import {
		GET_BOOK,
		GET_CHAPTER_LIST
	} from '@/store/mutationTypes.js';
	export default {
		data() {
			return {
				book_pic: "",
				audioActiveIndex: 0,
				audioNum: 1,
				audioList: [],
				showAudioListIcon: false,
				showAudioSpeedIcon: true,
			}
		},
		onLoad(opt) {
			this.book_pic = this.$store.getters[GET_BOOK].pic
			let chapter_list=this.$store.getters[GET_CHAPTER_LIST]
			
			if(!chapter_list||chapter_list.length<=0){
				return
			}
			for (let i = 0; i < chapter_list.length; i++) {
				this.audioList.push({
					title: chapter_list[i].name,
					epname: '',
					singer: '',
					image: "",
					fileUrl: config.baseUrl + '/v1/book/play?book_id=' + opt.book_id + '&chapter=' + chapter_list[i]
						.chapter_id+ '&channel=' + config.channel
						.chapter_id
				})
				if (opt.chapter_id == chapter_list[i].chapter_id) {
					this.audioActiveIndex = i
				}
			}
		},
		methods: {
			// 切换音频
			onAudioChange(data, index) {
				this.audioActiveIndex = index;
			},
			// 点击打开按钮
			onOpenAudioList() {
				console.log("点击打开按钮")
			}
		}
	}
</script>
<style>
	.content {
		padding-top: 200rpx;
	}
</style>