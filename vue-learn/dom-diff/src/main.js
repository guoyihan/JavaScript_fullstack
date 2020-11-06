import { createElement,render,renderDom } from './element'
import diff from './diff'
let vertualDom1 = createElement('ul',{class: 'list'}, [
    createElement('li',{class: 'item'},['1']),
    createElement('li',{class: 'item'},['2'])
])
let vertualDom2 = createElement('ul',{class: 'list-group',id: 'list'}, [
    createElement('li',{class: 'item'},['1']),
    createElement('li',{class: 'item'},['2']),
    createElement('li',{class: 'item'},['3'])
])


let patches = diff(vertualDom1, vertualDom2)  //补丁
console.log(patches)

let el = render(vertualDom1)

console.log(el)
renderDom(el, document.getElementById('app'))


// Dom diff 比较了两个虚拟DOM的区别, 比较两个对象的区别
// 根据两个虚拟对象创建出来 补丁, 描述改变的内容, 将这个补丁用来更新DOM