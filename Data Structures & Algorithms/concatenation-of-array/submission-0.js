class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = Array.from(nums);
        const n = nums.length;

        for (let i = 0; i<n; i++) {
            ans.push(nums[i]);
        }

        return ans;
    }
}
