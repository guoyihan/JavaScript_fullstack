from typing import List
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        # infinity
        MaxNum = float("-inf")
        sum = 0
        for num in nums:
            if sum < 0:
                sum = 0
            sum += num
            MaxNum = max(MaxNum, sum)
        return MaxNum

solution = Solution()
print(solution.maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))