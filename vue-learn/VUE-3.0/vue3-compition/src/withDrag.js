import { defineComponent, h } from 'vue'
// html css  js  .vue webpack 里面的 vue-loader 打包成js
// <template> 被打包成 函数   h('div', {'class': 'cls'}, '123')
// h被调用
// div节点就被创建出来了
export default function (Com) {
    console.log(Com);
    return defineComponent({
        render() {
            // return h('h3', {}, ['hhhh'])
            // return <h3>ddd</h3>
            return h('div', {
                'onTouchmove': this.handleMove,

                style: [
                    {position: 'absolute'},
                    {left: this.x + 'px'},
                    {top: this.y + 'px'}
            ]
            }, [h(Com)])
        },
        data() {
            return {
                x: 0,
                y: 0
            }
        },
        methods: {
            handleMove(e) {
                const x = e.touches[0].pageX
                const y = e.touches[0].pageY
                this.x = x
                this.y = y
            }
        }
    }

    )
}
