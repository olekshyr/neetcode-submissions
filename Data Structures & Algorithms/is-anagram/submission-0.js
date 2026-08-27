class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;

        const sChars = s.split('');
        const tChars = t.split('');

        sChars.sort();
        tChars.sort();

        for (let i = 0; i < tChars.length; i++) {
            if (tChars[i] != sChars[i]) return false;
        }

        return true;
    }
}
