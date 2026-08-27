class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const az = [1];
        const za = [];
        za[nums.length] = 1;
        const res = [];

        for (let i = 0; i < nums.length; i++) {
            az[i + 1] = nums[i] * az[i];
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            za[i] = nums[i] * za[i + 1];
        }

        for (let i = 0; i < nums.length; i++) {
            res[i] = az[i] * za[i + 1];
        }

        return res;
    }
}
