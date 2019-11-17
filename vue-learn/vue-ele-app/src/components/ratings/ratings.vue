<template>
	<div class="ratings" ref="ratingWrapper">
		<div class="ratings-content">
			<div class="overview">
				<div class="overview-left">
					<h1 class="score">{{seller.score}}</h1>
					<div class="title">综合评分</div>
					<div class="rank">高于周边商家{{seller.rankRate}}%</div>
				</div>
				<div class="overview-right">
					<div class="score-wrapper">
						<span class="title">服务态度</span>
						<div class="star star-36">
							<span class="star-item" :class="{on: seller.serviceScore >= 1}"></span>
							<span class="star-item" :class="{on: seller.serviceScore >= 2}"></span>
							<span class="star-item" :class="{on: seller.serviceScore >= 3}"></span>
							<span class="star-item" :class="{on: seller.serviceScore >= 4}"></span>
							<span class="star-item" :class="{on: seller.serviceScore == 5}"></span>
						</div>
						<span class="score">{{seller.serviceScore}}</span>
					</div>
					<div class="score-wrapper">
						<span class="title">商品评分</span>
						<div class="star star-36">
							<span class="star-item" :class="{on: seller.foodScore >= 1}"></span>
							<span class="star-item" :class="{on: seller.foodScore >= 2}"></span>
							<span class="star-item" :class="{on: seller.foodScore >= 3}"></span>
							<span class="star-item" :class="{on: seller.foodScore >= 4}"></span>
							<span class="star-item" :class="{on: seller.foodScore == 5}"></span>
						</div>
						<span class="score">{{seller.foodScore}}</span>
					</div>
					<div class="delivery-wrapper">
						<span class="title">送达时间</span>
						<span class="delivery">{{seller.deliveryTime}}分钟</span>
					</div>
				</div>
			</div>
			<div class="split"></div>
			<div class="ratingselect">
				<div class="rating-type border-1px">
					<span class="block positive" @click="selectRating(0)" :class="{active : showRating == 0}">全部<span class="count">24</span></span>
					<span class="block positive" @click="selectRating(1)" :class="{active : showRating == 1}">满意<span class="count">18</span></span>
					<span class="block negative" @click="selectRating(2)" :class="{active : showRating == 2}">不满意<span class="count">6</span></span>
				</div>
				<div class="switch">
					<span class="icon-check_circle" @click="selectText" :class="{off : clickSelect == false}"></span>
					<span class="text">只看有内容的评价</span>
				</div>
			</div>
			<div class="rating-wrapper">
				<ul>
					<li 
					v-for="(item, index) in ratings" 
					:key="index" 
					class="rating-item"
					:class="{off: ratingsIndex[index] == -1 || scoreIndex[index] == 0}"
					>
						<div class="avatar">
							<img :src="item.avatar">
						</div>
						<div class="content">
							<h1 class="name">{{item.username}}</h1>
							<div class="star-wrapper">
								<div class="star star-24">
									<span class="star-item" :class="{on: item.score >= 1}"></span>
									<span class="star-item" :class="{on: item.score >= 2}"></span>
									<span class="star-item" :class="{on: item.score >= 3}"></span>
									<span class="star-item" :class="{on: item.score >= 4}"></span>
									<span class="star-item" :class="{on: item.score == 5}"></span>
								</div>
								<span class="delivery">{{item.delivery}}</span>
							</div>
							<p class="text">{{item.text}}</p>
							<div class="recommend">
								<span class="icon-thumb_up" v-show="item.recommend.length != 0"></span>
								<span class="item" v-for="(recommend, index) in item.recommend" :key="index">{{recommend}}</span>
							</div>
							<div class="time">{{item.rateTime}}</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
	data () {
		return {
			ratings: [],
			seller:[],
			showRating: 0,
			clickSelect: true,
			ratingsIndex: [],
			scoreIndex: []
		}
	},
	created () {
		this.$http.get('http://localhost:8080/static/ratings.json').then(res => {
			console.log(res)
			if (res.data.errno === 0) {
				this.ratings = res.data.data
				this.$nextTick(() => {
					this._initScroll()
					this._initratings()
				})
			}
		})
		this.$http.get('http://localhost:8080/static/seller.json').then(res => {
			console.log(res)
			if (res.data.errno === 0) {
				this.seller = res.data.data
			}
		})
	},
	methods: {
		_initScroll () {
			this.ratingsScroll = new BScroll(this.$refs.ratingWrapper, {
				click: true
			})
		},
		_initratings() {
			this.ratings.forEach((res) => {	
				if(res.text == "") {
					this.ratingsIndex.push(-1)
				} else {
					this.ratingsIndex.push(0)
				}
			})
		},
		selectRating (idx){
			this.scoreIndex = []
			this.showRating = idx
			if (idx == 1) {
				this.ratings.forEach((res) => {	
					if(res.score >= 4) {
						this.scoreIndex.push(1)
					} else if (res.score < 4 && res.score >= 0){
						this.scoreIndex.push(0)
					}
				})
			} else if (idx == 2) {
				 this.ratings.forEach((res) => {	
					if(res.score >= 4) {
						this.scoreIndex.push(0)
					} else if (res.score < 4 && res.score >= 0){
						this.scoreIndex.push(1)
					}
				})
			}
		},
		selectText () {
			this.ratingsIndex = []
			if(this.clickSelect){
				this.clickSelect = false
				this.ratings.forEach((res) => {	
					if(res.text == "") {
						this.ratingsIndex.push(0)
					}
				})
			} else if (!this.clickSelect) {
				this.clickSelect = true
				this.ratings.forEach((res) => {	
					if(res.text == "") {
						this.ratingsIndex.push(-1)
					} else {
						this.ratingsIndex.push(0)
					}
				})
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'

.ratings
	position absolute
	top 174px
	bottom 0
	left 0
	width 100%
	overflow hidden
	.overview 
		display -webkit-box
		display -ms-flexbox
		display flex
		padding 18px 0
		.overview-left 
			-webkit-box-flex 0
			-ms-flex 0 0 137px
			flex 0 0 137px
			padding 6px 0
			width 137px
			border-right 1px solid rgba(7, 17, 27, 0.1)
			text-align center
			.score 
				margin-bottom 6px
				line-height 28px
				font-size 24px
				color #f90
			.title
				margin-bottom 8px
				line-height 12px
				font-size 12px
				color #07111b
			.rank
				line-height 10px
				font-size 10px
				color #93999f
		.overview-right
			-webkit-box-flex 1
			-ms-flex 1
			flex 1
			padding 6px 0 6px 24px
			.score-wrapper
				margin-bottom 8px
				.title
					display inline-block
					line-height 18px
					vertical-align top
					font-size 12px
					color #07111b
				.star
					display inline-block
					margin 0 12px
					vertical-align top
					font-size 0
					.star-item
						background-image url('./Star-large-off.png')
						width 15px
						height 15px
						margin-right 2px
						background-size 15px 15px
						display inline-block
						background-repeat no-repeat
						&.on
							background-image url('./Star-large-on.png')
				.score
					display: inline-block
					line-height 18px
					vertical-align top
					font-size 12px
					color #f90
			.delivery-wrapper
				font-size 0
				.title
					line-height 18px
					font-size 12px
					color #07111b
				.delivery
					margin-left 12px
					font-size 12px
					color #93999f
	.split
		width 100%
		height 16px
		border-top 1px solid rgba(7,17,27,.1)
		border-bottom 1px solid rgba(7,17,27,.1)
		background #f3f5f7
	.ratingselect
		.rating-type
			padding 18px 0
			margin 0 18px
			position relative
			font-size 0
			.block
				background #00a0dc
				display inline-block
				padding 8px 12px
				margin-right 8px
				line-height 16px
				border-radius 1px
				font-size 12px
				color #4d555d
			.positive
				background rgba(0,160,220,.2)
				&.active
					background #00a0dc
					color #fff
			.negative
				background rgba(77,85,93,.2)
				&.active
					background #4d555d
					color #fff
				.count
					margin-left 2px
					font-size 8px
		.switch
			padding 12px 18px
			line-height 24px
			border-bottom 1px solid rgba(7,17,27,.1)
			color #93999f
			font-size 0
			color #00c850
			.icon-check_circle
				display inline-block
				vertical-align top
				margin-right 4px
				font-size 24px
				&.off
					color #93999f
			.text
				display inline-block
				vertical-align top
				font-size 12px
				color #93999f
	.rating-wrapper
		padding 0 18px
		ul
			.rating-item
				display -webkit-box
				display -ms-flexbox
				display flex
				padding 18px 0
				position relative
				list-style none
				&.off
					display none
				.avatar
					-webkit-box-flex 0
					-ms-flex 0 0 28px
					flex 0 0 28px
					width 28px
					margin-right 12px
					img
						border-radius 50%
						width 28px
						height 28px
				.content
					position relative
					-webkit-box-flex 1
					-ms-flex 1
					flex 1
					.name
						margin-bottom 4px
						line-height 12px
						font-size 10px
						color #07111b
					.star-wrapper
						margin-bottom 6px
						font-size 0
						.star
							display inline-block
							margin-right 6px
							vertical-align top
							display inline-block
							.star-item
								background-image url('./Star-large-off.png')
								width 10px
								height 10px
								margin-right 2px
								background-size 10px 10px
								display inline-block
								background-repeat no-repeat
								&.on
									background-image url('./Star-large-on.png')
					.text
						margin-bottom 8px
						line-height 18px
						color #07111b
						font-size 12px
					.recommend
						line-height 16px
						font-size 0
						.icon-thumb_up
							color #00a0dc
							display inline-block
							margin 0 8px 4px 0
							font-size 9px
						.item
							padding 0 6px;
							border 1px solid rgba(7,17,27,.1)
							border-radius 1px
							color #93999f
							background #fff
							display inline-block
							margin 0 8px 4px 0
							font-size 9px
					.time
						position absolute
						top 0
						right 0
						line-height 12px
						font-size 10px
						color #93999f
				&:after
					display block
					position absolute
					left 0
					bottom 0
					width 100%
					border-top 1px solid rgba(7,17,27,.1)
					content " "
</style>
