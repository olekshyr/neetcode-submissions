class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const normalized = s.replace(/[^a-zA-Z\d]/g, '').toLowerCase();
        return normalized == normalized.split('').reverse().join('');
    }
}
