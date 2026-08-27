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

        const entries = Object.entries(numbersOccurances); 

        entries.sort((a,b) => b[1] - a[1]);

        let result = [];

        for (let i = 0; i < k; i++) {
            result.push(entries[i][0])
        }

        return result;
    }
}
