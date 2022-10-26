<template>
	<view class="categoryContainer">
		<view class="header">
			<view class="search_div">
				搜索商品
			</view>
		</view>
		<view class="content">
			<view class="leftContainer">
				<scroll-view scroll-y="true" class="navScroll">
					<view 
					class="navItem"
					:class="{
						active:navIndex === index
					}"
					v-for="(item,index) in categoryNames"
					:key="item"
					@click="changeNavIndex(index)"
					>{{item}}</view>
				</scroll-view>
			</view>
			<view class="rightContainer">
				<scroll-view scroll-y="true" class="contentScroll">
					<view class="scrollHeader">
						<image class="headerImg" :src="categoryObj.imgUrl" mode=""></image>
					</view>
					<view 
					class="contentItem"
					v-for="item in categoryObj.subCateList"
					:key="item.id"
					>
						<image :src="item.wapBannerUrl" :data-src="item.wapBannerUrl" mode=""></image>
						<text>{{item.name}}</text>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				categoryDatas:[],
				navIndex:0
			};
		},
		async created(){
			const result = await this.$myAxios("/getCategoryDatas");
			// console.log('result',result)
			this.categoryDatas = result;
		},
		/*
			computed和watch的区别
				相同点:
					1.语法相似
					2.他们两个都可以监视某个响应式属性的变化,
						如果响应式属性发生变化,computed和watch的回调函数就会执行
				不同点
					1.对象中的属性名含义不同
					2.computed回调函数可以返回数据,watch回调函数返回数据没有用
					3.使用场景
						computed
							我现在需要一个数据,可惜我手头没有,但是我可以根据现有的数据计算得到
								那么我会选择使用computed
								
							例如:购物车总价总数等内容,都可以根据当前购物车中的商品数组计算得到
							
						watch
							现在有一个数据,如果该数据发生了变化,我需要做一些事情,
								那么我会选择使用watch
								
							例如:在商品搜索页面,如果再次使用搜索框搜索内容,路径中的keyword会发生变化
								此时,我们需要根据最新的keyword发送请求,获取最新数据
					4.缓存
						computed具有缓存功能,只要监视的数据没有发生变化,computed中的代码只会执行一次
						watch由于没有返回值,所以不存在缓存这个概念
						
					小总结:个人认为,computed更注重于结果,watch更注重于过程
						
		
		*/
		computed:{
			// a(){
			// }
			categoryNames(){
				return this.categoryDatas.map((item)=>{
					return item.name
				})
			},
			categoryObj(){
				return this.categoryDatas[this.navIndex]
			}
		},
		methods:{
			changeNavIndex(index){
				this.navIndex = index;
			}
		}
		// watch:{
		// 	a(){
				
		// 	}
		// }
	}
</script>

<style lang="stylus">
.categoryContainer
	height 100%
	.header
		height 60upx
		padding 10upx 0
		border-bottom 2upx solid #eee
		.search_div
			height 60upx
			background #eee
			width 704upx
			margin 0 auto
			border-radius 10upx
			line-height 60upx
			text-align center
			font-size 28upx
	.content
		display flex
		height calc(100vh - 82upx)
		background #eee
		.leftContainer
			width 20%
			height 100%
			font-size 26upx
			text-align center
			border-right 1upx solid #eee
			//border-box 称为怪异盒模型 , 又称为IE盒模型,内缩盒模型,布局占位宽度 width(content+padding+border)+margin
			//content-box 标准盒模型,布局占位宽度 width+padding+border+margin
			box-sizing border-box  
			.navScroll
				height 100%
				background-color white
				.navItem
					position relative
					height 80upx
					line-height 80upx
					&.active::after
						position absolute
						content ''
						top 10upx
						left 4upx
						width 2upx
						height 60upx
						background-color #BB2C08
		.rightContainer
			width 80%
			height 100%
			background-color white
			.contentScroll
				width 100%
				height 100%
				.scrollHeader
					width 100%
					.headerImg
						display block
						width 520upx
						height 190upx
						margin 20upx auto
				.contentItem
					display inline-flex
					flex-direction column
					align-items center
					width 33.333% 
					image
						width 160upx
						height 144upx
					text
						font-size 26upx
</style>
