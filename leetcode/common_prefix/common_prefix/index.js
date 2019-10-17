function isCommonPrefix (strs, middle){
    const prefix = strs[0].substring(0, middle);
    for (let i = 1; i < strs.length; i++){
      if(!strs[i].startsWith(prefix))  return false;
    }
    return true;
}
/**           
 * @author gyh
 * @func 返回最长公共子串
 * @param strs 字符串数组
 * @retuen 字符串 
 */
const longestCommonPrefix = (strs) => {    //es6 箭头函数
// 最长公共子串, 绝对不可能比最短的一个字符串长
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];

  let minLen = Number.MAX_VALUE; 
  for (let i = 0; i < strs.length; i++){
    //   if (strs[i].length < minLen) {
    //       minLen = strs[i].length;
    //   }
    minLen = Math.min(minLen, strs[i].length);      //选出最小字符串的长度
   }
//    console.log(minLen);

let low = 0,      //动态的 左边
    high = minLen;

while(low <= high) {
   const middle = (high + low) >> 1;    //中间值
//    功能独立, 公共子串
   if (isCommonPrefix(strs, middle)) {
       low = middle + 1;
   }  else {
       high = middle - 1;
   }
}


  return strs[0].substring(0, (low + high) >> 1);
}
const strs = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(strs));
