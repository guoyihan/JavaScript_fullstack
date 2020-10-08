var levelOrder = function(root) {
    let res = []
    if (!root) {
        return res
    } 
    const q = []
    q.push(root)
    while (q.length !== 0) {
        const len = q.length
        res.push([])

        for (let i = 0; i < len; i++){
            const item = q.shift()
            res[res.length - 1].push(item.val)
            if(item.left) q.push(item.left)
            if(item.right) q.push(item.right)
        }
    }
    return res
}; 



// 模板 BFS
// const levelOrder = (root) => {
//     // 狗不理
//     if (!root) {
//       return [];
//     }
    
//     // 1. 设置结果集
//     const result = [];
  
//     // 2. 设置当前层
//     let nowRoot = [root];
  
//     // 3. 广度优先搜索（BFS）
//     while (nowRoot.length) {
//       // 3.1 设置下一层
//       const nextRoot = [];
  
//       // 3.2 设置当前层的值
//       const nowResult = [];
  
//       // 3.3 遍历当前层，取值以及添加下一层
//       for (let i = 0; i < nowRoot.length; i++) {
//         // 3.3.1 添加值
//         nowResult.push(nowRoot[i].val);
  
//         // 3.3.2 如果存在左子树
//         if (nowRoot[i].left) {
//           nextRoot.push(nowRoot[i].left);
//         }
  
//         // 3.3.3 如果存在右子树
//         if (nowRoot[i].right) {
//           nextRoot.push(nowRoot[i].right);
//         }
//       }
  
//       // 3.4 收集完毕，开始交接
//       nowRoot = nextRoot;
//       result.push(nowResult);
//     }
  
//     // 4. 返回结果
//     return result;
//   };
