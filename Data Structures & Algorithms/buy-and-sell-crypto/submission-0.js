class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let currMin = Infinity;

        for (let i = 0; i < prices.length; i++) {
            currMin = Math.min(prices[i], currMin);

            maxProfit = Math.max(maxProfit, prices[i] - currMin);
        }

        return maxProfit;
    }
}
