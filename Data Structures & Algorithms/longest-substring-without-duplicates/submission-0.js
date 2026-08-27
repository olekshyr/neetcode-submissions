class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring = function(s) {
        const chars = new Set();

        let l = 0;
        let r = 0;
        let maxLength = 0;

        while (r < s.length) {
            if (chars.has(s[r])) {
                chars.delete(s[l]);
                l++;
            } else {
                chars.add(s[r]);
                r++;
            }

            maxLength = Math.max(maxLength, chars.size)
        }

        return maxLength;
    }
}