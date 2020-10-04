var inorderTraversal = function(root) {    
    const arr = []
    const aa = root => {
        if (root.left) {
            aa(root.left)
        }
        if (!root.left) {
            arr.push(root.val)
            if (root.right) {
                aa(root.right)
                arr.push(root.right.val)
                return
            } 
            return
        }
        return
        }
    aa(root)
    return arr
};


var inorderTraversal = function(root) {
    const res = [];
    const inorder = (root) => {
        if (!root) {
            return;
        }
        inorder(root.left);
        res.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    return res;
};

