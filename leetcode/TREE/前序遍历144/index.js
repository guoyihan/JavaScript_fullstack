var preorderTraversal = function(root) {
    const arr = []
    const preorder = root => {
        if(!root) {
            return
        }
        arr.push(root.val)

        preorder(root.left)

        preorder(root.right)

    }
    preorder(root)
    
    return arr
};