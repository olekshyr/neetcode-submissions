class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        // mutating "nums" can be faster but is a side effect that break immutability
        const ans = Array.from(nums);
        const n = nums.length;

        for (let i = 0; i<n; i++) {
            ans.push(nums[i]);
        }

        return ans;
    }
}
