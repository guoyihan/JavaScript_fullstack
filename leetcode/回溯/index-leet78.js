var subsets = function(nums) {
    result = []
    function backtrack (start, tmpPath) {
        result.push(tmpPath.slice(0))

        for (let i = start; i < nums.length; i++) {
            let num = nums[i]
            tmpPath.push(num)
            backtrack(i + 1, tmpPath)
            tmpPath.pop()
        }

    }    
    backtrack(0, [])
    return result
};
