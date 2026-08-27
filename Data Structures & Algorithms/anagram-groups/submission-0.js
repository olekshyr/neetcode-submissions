class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = {};

        strs.forEach(str => {
            let anagram = str.split('').sort().join();

            if (anagrams[anagram]) {
                anagrams[anagram].push(str)
            } else {
                anagrams[anagram] = [str]
            }
        })

        return Object.values(anagrams);
    }
}
