class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        const beginnings = [];
        let maxLen = 0;

        for (let i = 0; i < nums.length; i++) {
            if (!set.has(nums[i] - 1)) {
                beginnings.push(nums[i]);
            }
        }

        beginnings.forEach(num => {
            let curr = num;
            
            while(set.has(curr)) {
                curr++
            };

            maxLen = Math.max(maxLen, curr - num);
        })

        return maxLen;
    }
}
