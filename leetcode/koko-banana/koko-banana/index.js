/***
 *                           
 * @param {array} piles
 * @param {int} H
 * @return {int} lo
 * @func 求最慢的吃法
 */
const canEatAllBananas = (piles, H, mid) => {
    // let i = 0;
    // for(i; i < mid; i++)
    let h = 0;
    for(let pile of piles) {              //es6 的 for 循环
        h += Math.ceil(pile / mid);
    }
    return h <= H;
}



const minEatingSpeed = (piles, H) => {
    let lo = 1;
    // let hi = 0;                          
    // for (let i = 0; i < piles.length; i++){
    //     if (piles[i] > hi) {
    //         hi = piles[i];
    //     }   
    // }
    let mid = 0;
    let hi = Math.max(...piles);     //  ***** Math.max([1, 2, 3, 4])   NaN       Math.max(...[1, 2, 3, 4])     4     ... 展开运算符为
    while(lo <= hi){
        mid = lo + ((lo + hi) >> 1);
        console.log(lo, mid, hi, '++++');
        if (canEatAllBananas(piles, H, mid)) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
        
    }
    console.log(lo, mid, hi, '---------');      //mid 打印不出来,因为只存在于上面的while循环,需要mid 在循环外面申明
    return lo;
}
console.log(minEatingSpeed([3, 6, 7, 11], 8));