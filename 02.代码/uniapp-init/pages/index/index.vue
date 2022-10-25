<template>
	<!-- uniapp开发中,可以使用html标签,也可以使用小程序的组件,
	但是小程序的组件兼容性比较好,功能相对也比较完善 -->
	<view class="indexContainer">
		<view class="header">
			<image class="logo" src="../../static/images/logo.png" mode=""></image>
			<view class="search">
				<view class="iconfont icon-sousuo"></view>
				<input class="searchInput" 
				type="text" 
				value="" 
				placeholder="搜索商品" 
				placeholder-class="placeholder"
				/>
			</view>
			<button class="username">七月</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onLoad() {
			
		},
		methods:{
			
		}
	}
	
</script>

<style lang="stylus">
	// tab向后缩紧,shift+tab向前缩进
	.indexContainer
		.header
			display flex
			// justify-content  space-between
			margin-top 20upx
			.logo
				// 750upx=屏幕百分百宽度
				width 118upx
				height  40upx
				margin 0 20upx
			.search
				position relative
				background-color  #ccc
				height 60upx
				flex-grow  1
				border-radius  10upx
				padding-left 60upx
				.iconfont
					position absolute
					left 20upx
					top 50%
					transform translateY(-50%)
				.searchInput
					height 100%
					.placeholder
						text-align center
						font-size 24upx
						text-indent -40upx
			.username
				width 140upx
				height 60upx
				border-radius  10upx
				font-size 24upx
				margin 0 20upx
				color red
			
		
	
</style>
