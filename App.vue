<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import '@/uni_modules/uv-ui-tools/index.scss';
	@import "@/common/demo.scss";
	/*每个页面公共css */
	.uv-page {
		padding: 15px 15px 40px;
	}

	.uv-demo-block {
		margin-bottom: 22px;
	}

	.uv-demo-block__title {
		font-size: 14px;
		color: #8f9ca2;
		margin-bottom: 8px;
	}

	body,
	.uni-page-head {
		max-width: 414px;
		margin: 0 auto
	}

	.book_image {
		height: 130px;
		width: 100px;
		padding: 3px 0 2px;
	}

	.book_info {
		max-height: 150px;
		border-bottom: 1px solid #eee;
		background: white;
	}

	.book_info_h {
		margin-top: 1px;
		color: #2f2f2f;
		height: 24px;
		font-size: 14px;
		font-weight: 600;
		line-height: 20px;
	}

	.book_info_p {
		clear: both;
		color: #8b8b8b;
		margin-top: 0px;
		font-size: 12px;
		overflow: hidden;
		line-height: 20px;
	}

	.tab {
		margin-top: 3px;
		background: #f4f5f7;
		color: #000000;
		font-size: 14px;
		padding-left: 16px;
	}

	.uv-row {
		background: #f9f9f9;
		font: 14px/1.8 "微软雅黑", "黑体", "宋体";
		min-width: 320px;
	}
</style>