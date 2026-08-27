class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sRegistry = {};
        const tRegistry = {};

        if (s.length !== t.length) return false;

        for (let i = 0; i < s.length; i++ ) {
            sRegistry[s.charAt(i)] = s.charAt(i) in sRegistry ? sRegistry[s.charAt(i)] + 1 : 1;
        }

        for (let j = 0; j < t.length; j++ ) {
            tRegistry[t.charAt(j)] = t.charAt(j) in tRegistry ? tRegistry[t.charAt(j)] + 1 : 1;
        }

        console.log(sRegistry, tRegistry)

        for (let char in sRegistry) {
            if (sRegistry[char] !== tRegistry[char]) return false;
        }

        return true;
    }
}
