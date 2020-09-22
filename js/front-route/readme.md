# 前端路由

1. 如何改变url,却不引起页面的刷新          加#   hash
2. 如何知道url变化?     location.hash拿到hash地址

hash
通过hashchange 事件监听url 的变化
改变url的方式
- 通过浏览器的前进后退 来改变url
- 通过<a>改变url
- 通过window.location 改变url
以上这几种情况改变url都会触发hashchange事件



history     
提供了 pushState 和 replaceState 两个方法,这两个方法改变url的path部分
不会引起页面刷新
通过popstate 事件监听url 的变化

- 通过浏览器前进后退来改变url
- 通过pushState/replaceState或a标签改变url会触发popState事件
