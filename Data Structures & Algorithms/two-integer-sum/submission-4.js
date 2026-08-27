class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let seen = new Map();

        for (let i = 0; i< nums.length; i++) {
            let pair = target - nums[i];
            
            if (seen.has(pair)) {
                return [seen.get(pair), i]
            }

            seen.set(nums[i], i)
        }
    }
}
