//    https://leetcode-cn.com/problems/assign-cookies/


// 既能满足孩子, 还能消耗最少, 较小的饼干分配给胃口较小的孩子
// 将饼干数组和孩子数组升序排列, 遍历饼干数组, 找到能满足第一个孩子的饼干
// 继续遍历饼干数组,找到第二,三,四...n
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    
    let total = 0;
    for(let i = 0; i < s.length; i ++){
        if(s[i] >= g[total]){
            total ++;
        }
        if (total === g.length) {
            return total
        }
    }   
    return total;
};