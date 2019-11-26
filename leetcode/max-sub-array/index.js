function maxSubArray(nums) {
    var t
    if (nums.length == 1) {
        max = nums[0]
        return max
    }
    for (let i = 0; i < nums.length; i++) {
        t = 0
        if (i == 0) {
            max = nums[0]
        }
        for (let j = i; j < nums.length; j++) {
            if (i != j){
                if (j - i <= 1) {
                    t = nums[j] + t
                    if(t > max) {
                        max = t
                    }
                } else {
                    t = nums[j] + t
                    if(t > max) {
                        max = t
                    }
                }
            } else {
                t = nums[j]
                if(t > max) {
                    max = t
                }
            }
        }
    }
    return max
}
console.log(maxSubArray(arr))

