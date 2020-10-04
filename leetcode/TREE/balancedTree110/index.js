//后序遍历
var isBalanced = function (root) {
    return balanced(root) !== -1
};
var balanced = function (node) {
    if (!node) return 0
    // 把遍历左孩子的递归写在上面,再写递归右孩子的,可以达到后续遍历的效果
    const left = balanced(node.left)
    const right = balanced(node.right)
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
        return -1
    }
    return Math.max(left, right) + 1
}


//后序遍历 