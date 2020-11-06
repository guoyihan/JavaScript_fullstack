// 类型相同的话, 看属性
// 产生出来一个 {type: '', attrs: {class: 'list-group}}
// 新的dom节点不存在 { type: 'remove', index: xxx }
// 类型不同的话,直接替换整个dom
// 文本不一样 { type: 'text' , text: 1}


function diff(oldTree, newTree) {
    let patches = {}
    let index = 0
    walk(oldTree, newTree, patches, index)
    return patches    
}

function diffAttr(oldAttrs, newAttrs) {
    let patch = {}
    for (let key in oldAttrs) {
        if(oldAttrs[key] !== newAttrs[key]) {
            patch[key] = newAttrs[key] // 有可能会是 undefined
        }
    }

    // 新节点新增属性
    for (let key in newAttrs) {
        if (!oldAttrs.hasOwnProperty(key)) {
            patch[key] = newAttrs[key]
        }
    }

    return patch
} 

function diffChildren(oldchildren, newchildren, index, patches) {
    oldChild.forEach((child,idx) => {
        walk(child, newchildren[idx], patches, ++Index)
    });
}


const ATTRS = 'ATTRS'
const TEXT = 'TEXT'
const REPLACE = 'REPLACE'
const REMOVE = 'REMOVE'

function walk(oldTree, newTree, patches, index) {
    let currentPatch = [] // 补丁包
    if (oldTree.type === newTree.type) {
        // 比较属性是否一致
        let attrs = diffAttr(oldTree.props, newTree.props)

        if (Object.keys(attrs).length > 0) {
            currentPatch.push({type:'', attrs})
        }
        // 如果有子节点,就遍历子节点
        diffChildren(oldTree.children, newTree.children, index, patches)
    }
    if (currentPatch.length > 0) // 当前元素确实有补丁
        patches[index] = 

    patches[index]
}



export default diff 