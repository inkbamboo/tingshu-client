<template>
	<view>
		<p class="tab">{{tabName}}</p>
		<view v-for="(bookItem,index) in list" :key="index">
			<navigator class="book_info"
				:url="'/pages/bookInfo/bookInfo?book_id=' + bookItem.book_id+'&tab='+bookItem.tab">
				<view v-if="isSample==true&&bookItem.pic!=''">
					<uv-row class="uv-row">
						<uv-col span="4">
							<image class="book_image" :src="bookItem.pic" lazy-load></image>
						</uv-col>
						<uv-col span="6">
							<h3 class="book_info_h">{{ bookItem.name }}</h3>
							<p class="book_info_p">{{ bookItem.summary }}</p>
						</uv-col>
					</uv-row>
				</view>
				<view v-else-if="isSample==true">
					<uv-row class="uv-row">
						<uv-col span="10">
							<h3 class="book_info_h">{{ bookItem.name }}</h3>
						</uv-col>
					</uv-row>
				</view>
				<view v-else>
					<uv-row class="uv-row">
						<uv-col span="4">
							<image class="book_image" :src="bookItem.pic" :lazy-load="true"></image>
						</uv-col>
						<uv-col span="6">
							<h3 class="book_info_h">{{ bookItem.name }}</h3>
							<p class="book_info_p">作者：{{ bookItem.author }}</p>
							<p class="book_info_p">类别：{{ bookItem.tab_name }}</p>
							<p class="book_info_p">播音：{{ bookItem.speaker }}</p>
							<p class="book_info_p">状态：{{ bookItem.status }}</p>
							<p class="book_info_p">时间：{{ bookItem.create_time }}</p>
						</uv-col>
					</uv-row>
					<p class="book_info_p">{{ bookItem.summary }}</p>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		name: "bookList",

		data() {
			return {

			};
		},
		props: {
			tabName: {
				type: String,
				default: ""
			},
			list: {
				type: Array,
				default: []
			},
			isSample: {
				type: Boolean,
				default: false
			}
		},
	}
</script>

<style>

</style>