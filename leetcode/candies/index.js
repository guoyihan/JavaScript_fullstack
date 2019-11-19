// es6新特性
const distributeCandies = function (candies) {
    var count = 0; //种类数 unique
    let obj = {};
    // 糖果的种类数
    candies.forEach((item) => {
        if(!obj[item]) {
            obj[item] = 1 //出现过
            count ++  // 加上总类数
        }
    });
    return count >= ( candies.length/2) ?
    (candies.length >> 1) : count;
}

console.log(distributeCandies([1,1,2,2,3,3]))


let arr1 = [1,1,1,2,2,2,3,3,3]
console.log(unique(arr1))
