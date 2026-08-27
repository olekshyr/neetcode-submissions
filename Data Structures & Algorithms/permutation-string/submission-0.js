class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;
        
        const s1Chars = new Array(26).fill(0)
        const s2Chars = new Array(26).fill(0)

        let matches = 0;

        for (let i = 0; i < s1.length; i++) {
            const charIdxS1 = s1.charCodeAt(i) - 97;
            const charIdxS2 = s2.charCodeAt(i) - 97;


            s1Chars[charIdxS1]++;
            s2Chars[charIdxS2]++;
        }

        for (let i = 0; i < 26; i++) {
            if (s1Chars[i] == s2Chars[i]) matches++;
        }

        for (let i = s1.length; i < s2.length; i++) {
            if (matches == 26) return true;

            const r = s2.charCodeAt(i) - 97;
            
            s2Chars[r]++;
            if (s2Chars[r] == s1Chars[r]) {
                matches++;
            } else if (s2Chars[r] - 1 == s1Chars[r]) {
                matches--;
            }

            let l = s2.charCodeAt(i - s1.length) - 97;
            s2Chars[l]--;

            if (s2Chars[l] == s1Chars[l]) {
                matches++;
            } else if (s2Chars[l] + 1 == s1Chars[l]) {
                matches--;
            }
        }


        return matches == 26;
    }
}
