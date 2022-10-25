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
		<scroll-view class="navScroll" scroll-x="true" enable-flex="true">
			<view 
			class="navItem"
			:class="navIndex===-1?'active':''"
			@click="changeNavIndex(-1)"
			>
				推荐
			</view>
			<view 
			class="navItem" 
			:class="{
				active:navIndex===index
			}"
			@click="changeNavIndex(index)"
			v-for="(item,index) in indexData.kingKongModule.kingKongList"
			:key="item.L1Id"
			>
				{{item.text}}
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indexData:{},
				navIndex:-1
			}
		},
		/*
			请求必须搞懂的三件事情
				1.在哪发
					Vue->mounted和created
					小程序->onLoad
					
					uniapp兼容Vue和小程序的生命周期,选择顺手的即可
					
				2.怎么发
					Vue->axios和ajax
					小程序->wx.request
					
					uniapp支持小程序所有的API,全局对象是uni,API选择使用小程序的
					
				3.往哪发
					查看接口文档
						请求重要的三个要素
							请求地址+请求方式+请求参数
		*/
		// onLoad() {
		// 	console.log('------onLoad------')
		// },
		// created(){
		// 	console.log('created')
		// },
		mounted(){
			// console.log('mounted')
			uni.request({
				url:"http://localhost:3000/getIndexData",
				// method:"GET",
				success:(res)=>{
					// console.log('res',res)
					const data = res.data;
					// this.setData({
					// 	indexData:data
					// })
					
					// uniapp中核心语法全部是使用Vue的
					this.indexData = data;
				}
			})
		},
		methods:{
			changeNavIndex(index){
				this.navIndex = index;
			}
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
		.navScroll
			// display flex
			white-space nowrap
			.navItem
				display inline-block
				width 140upx
				height 80upx
				font-size 28upx
				text-align center
				line-height 80upx
				flex-shrink 0
				&.active
					border-bottom 4upx solid red
		
	
</style>
