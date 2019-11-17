<template>
  <div class="seller" ref="sellerWrapper">
      <div class="sell-content">
          <div class="overview">
              <h1 class="title">{{seller.name}}</h1>
              <div class="desc border-1px">
                  <div class="star star-36">
                        <span class="star-item" :class="{on: seller.score >= 1}"></span>
                        <span class="star-item" :class="{on: seller.score >= 2}"></span>
                        <span class="star-item" :class="{on: seller.score >= 3}"></span>
                        <span class="star-item" :class="{on: seller.score >= 4}"></span>
                        <span class="star-item" :class="{on: seller.score == 5}"></span>
                  </div>
                  <span class="text">({{seller.ratingCount}})</span>
                  <span class="text">月售{{seller.sellCount}}单</span>
              </div>
              <ul class="remark">
                  <li class="block">
                      <h2>起送价</h2>
                      <div class="content">
                          <span class="stress">{{seller.minPrice}}</span>元
                      </div>
                  </li>
                  <li class="block">
                      <h2>商家配送</h2>
                      <div class="content">
                          <span class="stress">{{seller.deliveryPrice}}</span>元
                      </div>
                  </li>
                  <li class="block">
                      <h2>平均配送时间</h2>
                      <div class="content">
                          <span class="stress">{{seller.deliveryTime}}</span>分钟
                      </div>
                  </li>
              </ul>
              <div class="favorite" @click="redHeart">
                  <span class="icon-favorite" :class="{active: isFavorite}"></span>
                  <span class="text">{{collect}}</span>
              </div>
          </div>
          <div class="split"></div>
          <div class="bulletin">
              <h1 class="title">公告与活动</h1>
              <div class="content-wrapper border-1px">
                  <p class="content">{{seller.bulletin}}</p>
              </div>
              <ul class="supports">
                  <li class="support-item border-1px">
                      <span class="icon decrease"></span>
                      <span class="text" v-if="seller.supports">{{seller.supports[0].description}}</span>
                  </li>
                  <li class="support-item border-1px">
                        <span class="icon discount"></span>
                        <span class="text" v-if="seller.supports">{{seller.supports[1].description}}</span>
                  </li>
                  <li class="support-item border-1px">
                        <span class="icon special"></span>
                        <span class="text" v-if="seller.supports">{{seller.supports[2].description}}</span>
                  </li>
                  <li class="support-item border-1px">
                        <span class="icon invoice"></span>
                        <span class="text" v-if="seller.supports">{{seller.supports[3].description}}</span>
                  </li>
                  <li class="support-item border-1px">
                      <span class="icon guarantee"></span>
                      <span class="text" v-if="seller.supports">{{seller.supports[4].description}}</span>
                  </li>
              </ul>
          </div>
          <div class="split"></div>
          <div class="pics" >
              <h1 class="title">商家实景</h1>
              <div class="pic-wrapper" ref="picWrapper">
                  <ul class="pic-list" style="width: 498px">
                      <li class="pic-item" v-for="(item, index) in seller.pics" :key="index">
                          <img :src="item" width="120" height="90">
                      </li>
                  </ul>
              </div>
          </div>
          <div class="split"></div>
          <div class="info">
              <h1 class="title border-1px">商家信息</h1>
              <ul>
                  <li class="info-item"  v-for="(item, index) in seller.infos" :key="index">{{item}}</li>
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
                seller:[],
                isFavorite: false,
                collect: "收藏"
            }
        },
    created () {
		this.$http.get('http://localhost:8080/static/seller.json').then(res => {
			console.log(res)
			if (res.data.errno === 0) {
				this.seller = res.data.data
				this.$nextTick(() => {
					this._initScroll()
				})
			}
		})
    },
    methods: {
        _initScroll () {
			this.sellerScroll = new BScroll(this.$refs.sellerWrapper, {
				click: true
            })
            this.picScroll = new BScroll(this.$refs.picWrapper, {
                click: true,
                scrollX: true
            })
        },
        redHeart(){
            if(!this.isFavorite) {
                this.isFavorite = true
                this.collect = "已收藏"
            } else {
                this.isFavorite = false
                this.collect = "收藏"
            }
        }
    } 
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'


.seller
    position absolute
    top 174px
    bottom 0
    left 0
    width 100%
    overflow hidden
    .overview
        position relative
        padding 18px
        .title 
            margin-bottom 8px
            line-height 14px
            color #07111b
            font-size 14px
        .desc
            padding-bottom 18px
            position relative
            font-size 0
            .star
                display inline-block
                margin-right 8px
                vertical-align top
                .star-item
                    display inline-block
                    background-repeat no-repeat
                    width 15px
                    height 15px
                    margin-right 6px
                    background-size 15px 15px
                    background-image url(./Star-large-off.png)
                    &.on
                        background-image url(./Star-large-on.png)
            .text
                display inline-block
                margin-right 12px
                line-height 18px
                vertical-align top
                font-size 10px
                color #4d555d
            &:after
                display block
                position absolute
                left 0
                bottom 0
                width 100%
                border-top 1px solid rgba(7,17,27,.1)
                content " "
        .remark
            display -webkit-box
            display -ms-flexbox
            display flex
            padding-top 18px
            .block 
                -webkit-box-flex 1
                -ms-flex 1
                flex 1
                text-align center
                border-right 1px solid rgba(7,17,27,.1)
                h2
                    margin-bottom 4px
                    line-height 10px
                    font-size 10px
                    color #93999f
                .content
                    line-height 24px
                    font-size 10px
                    color #07111b
                    .stress
                        font-size 24px
        .favorite
            position absolute
            width 50px
            right 11px
            top 18px
            text-align center
            .icon-favorite
                display block
                margin-bottom 4px
                line-height 24px
                font-size 24px
                color #d4d6d9
                &.active
                    color #f01414
            .text
                line-height 10px
                font-size 10px
                color #4d555d
    .split
        width 100%
        height 16px
        border-top 1px solid rgba(7,17,27,.1)
        border-bottom 1px solid rgba(7,17,27,.1)
        background #f3f5f7
    .bulletin
        padding 18px 18px 0
        .title
            margin-bottom 8px
            line-height 14px
            color #07111b
            font-size 14px
        .content-wrapper
            padding 0 12px 16px
            position relative
            .content
                line-height 24px
                font-size 12px
                color #f01414
            &:after
                display block
                position absolute
                left 0
                bottom 0
                width 100%
                border-top 1px solid rgba(7,17,27,.1)
                content " "
        ul
            .support-item
                padding 16px 12px
                position relative
                font-size 0
                .icon
                    display: inline-block
                    width 16px
                    height 16px
                    vertical-align top
                    margin-right 6px
                    background-size 16px 16px
                    background-repeat no-repeat
                    &.decrease
                        background-image url(./decrease_3@3x.png)
                    &.discount
                        background-image url(./discount_3@3x.png)
                    &.special
                        background-image url(./special_3@3x.png)
                    &.invoice
                        background-image url(./invoice_3@3x.png)
                    &.guarantee
                        background-image url(./guarantee_3@3x.png)
                .text
                    line-height 16px
                    font-size 12px
                    color #07111b
                &:after
                    display block
                    position absolute
                    left 0
                    bottom 0
                    width 100%
                    border-top 1px solid rgba(7,17,27,.1)
                    content " "
    .pics 
        padding 18px
        .title
            margin-bottom 12px
            line-height 14px
            color #07111b
            font-size 14px
        .pic-wrapper 
            width 100%
            overflow hidden
            white-space nowrap
            .pic-list
                width 498px
                display block
                .pic-item
                    display inline-block
                    margin-right 6px
                    width 120px
                    height 90px
                    img 
                        width 100%
    .info
        padding 18px 18px 0
        color #07111b
        .title
            padding-bottom 12px
            line-height 14px
            position relative
            font-size 14px
            &:after
                display block
                position absolute
                left 0
                bottom 0
                width 100%
                border-top 1px solid rgba(7,17,27,.1)
                content " "
        ul
            .info-item
                padding 16px 12px
                line-height 16px
                position relative
                font-size 12px
                &:after
                    display block
                    position absolute
                    left 0
                    bottom 0
                    width 100%
                    border-top 1px solid rgba(7,17,27,.1)
                    content " "
</style>