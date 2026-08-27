class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        const mappedNums = nums.map((el, index) => ({
            value: el,
            originalIndex: index
        }))

        mappedNums.sort((a,b) => a.value - b.value);

        while (l < r) {
            if (mappedNums[l].value + mappedNums[r].value == target) return [mappedNums[l].originalIndex, mappedNums[r].originalIndex];
            
            if (mappedNums[l].value + mappedNums[r].value > target) {
                r--;
            } else {
                l++;
            }
        }
    }
}
