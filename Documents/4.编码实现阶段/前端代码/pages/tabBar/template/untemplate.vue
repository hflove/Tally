<template>
	<!--我的设置界面-->
	<view class="page">
		<!-- <page-head :title="title" style="height: 250upx;"></page-head> -->
		<!-- <view class="login" style="height: 250upx;">
			<button style="width:100px; margin-top:75upx; padding-left:25px;padding-right: 25px; background-color: #a59adf;" @tap="navigateTo">登 录</button>
		</view> -->
		<view class="logo">
			<view class="img">
				<image mode="widthFix" src="../../../static/person1.png" @tap="navigateTo"></image>
			</view>
			<view>
				<!-- <text style="text-align: center;margin-left: 20px;">{{username}}</text> -->
				<view style="">{{username}}</view>
			</view>
		</view>
		<!-- <view class="uni-list">
			<!- <block v-for="(item,index) in lists" :key="index"> -->
		<view class="uni-list-cell" hover-class="uni-list-cell-hover">
			<view class="uni-triplex-row">
				<view class="uni-triplex-left">
					<text class="uni-title uni-ellipsis">用户ID</text>
				</view>
			</view>
		</view>
		<view class="uni-list-cell" hover-class="uni-list-cell-hover">
			<view class="uni-triplex-row">
				<view class="uni-triplex-left">
					<text class="uni-title uni-ellipsis">我的设置</text>
				</view>
			</view>
		</view>
		<view class="uni-list-cell" hover-class="uni-list-cell-hover">
			<view class="uni-triplex-row">
				<view class="uni-triplex-left">
					<text class="uni-title uni-ellipsis">使用帮助</text>
				</view>
			</view>
		</view>
		<view class="uni-list-cell" hover-class="uni-list-cell-hover">
			<view class="uni-triplex-row">
				<view class="uni-triplex-left">
					<text class="uni-title uni-ellipsis">退出登录</text>
				</view>
			</view>
		</view>
		<!-- </block> -->
	</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				// title: 'list-triplex-row',
				// lists: [],
				username: "点击头像登录"
			}
		},
		onload() {
			uni.setStorage({
				key: "userinfo",
				data: userinfo,
				success: function() {
					console.log('success');
					uni.reLaunch({
						url:'./template'
					})
					// console.log(userinfo);
				},
			})
		},
		methods: {
			navigateTo() {
				uni.navigateTo({
					url: 'login'
				})
			},
		},

	}
</script>

<style lang="scss">
	// @import "../../../static/css/login.scss";
	.logo {
		width: 100%;
		height: 50vw;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		.img {
			width: 25%;
			height: 26vw;

			image {
				width: 100%;
				border-radius: 50%;
			}
		}
	}
</style>
