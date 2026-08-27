class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a - b);
        const res = [];
    
        nums.forEach((value, i) => {
            if (i > 0 && value === nums[i - 1]) return;

            let l = i + 1;
            let r = nums.length - 1;
            
            while (l < r) {
                let currRes = value + nums[l] + nums[r];

                if (currRes > 0) r--;
                if (currRes < 0) l++;
                if (currRes === 0) {
                    res.push([value, nums[l], nums[r]]);
                    l++;
                    while(l < r && nums[l] === nums[l - 1]) l++;
                }
            }
        });
    
        return res;
    }
}
