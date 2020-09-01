<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img
          width="64"
          height="64"
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598955373084&di=aa28c4bdc39457c3b41f4737170d649d&imgtype=0&src=http%3A%2F%2F01imgmini.eastday.com%2Fmobile%2F20181213%2F20181213104733_33fb27dd175442d6f29500f88dabf729_1.jpeg"
        />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">粥品香坊</span>
        </div>
        <div class="description">蜂鸟专送/38分钟送达</div>
        <div class="support">
          <img class="support-ico" src="./brand@2x.png" />
          <span class="text">在线支付满28减29</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
@import "../../common/stylus/variable.styl";
@import "../../common/stylus/mixin.styl";
.header
    position relative
    overflow hidden
    color $color-white
    background-color $color-background-ss
    .content-wrapper
        position relative
        display flex
        align-items center
        padding 24px 12px 18px 24px
        .avatar
            flex 0 0 64px
            width 64px
            margin-right 16px
            img
                border-radius 2px
        .content
            flex 1
            .title
                display flex
                align-items center
                margin-bottom 8px
                .brand
                    width 30px
                    height 18px
                    bg-image('./brand')
                    background-size 30px 18px
                    background-repeat no-repeat
                .name
                    margin-left 6px
                    font-size $fontsize-large
                    font-weight bold
            .description
                margin-bottom 8px
                line-height 12px
                font-size $fontsize-small
            .support
                display flex
                align-items center
                &-ico
                    margin-right 4px
                .text
                    line-height 12px
                    font-size $fontsize-small-s
</style>
