class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let numbersOccurances = {};

        for (const num of nums) {
            if (num in numbersOccurances) {
                numbersOccurances[num]++;
            } else {
                numbersOccurances[num] = 1;
            }
        }

        const buckets = new Array(nums.length + 1).fill().map(() => []);

        for (const num in numbersOccurances) {
            buckets[numbersOccurances[num]].push(num);
        }

        const result = [];
        let r = buckets.length - 1;

        while (result.length < k) {
            if (buckets[r].length > 0) {
                result.push(buckets[r].pop())
            } else {
                r--;
            }
        }

        return result;
    }
}
