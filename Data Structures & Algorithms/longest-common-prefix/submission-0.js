class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let res = [];

        strs.sort((a,b) => a.length - b.length);

        for (let i = 0; i < strs[0].length; i++) {
            let char = strs[0][i];

            for (let j = 0; j < strs.length; j++) {
                if (char != strs[j][i]) {
                    return res.join('');
                }
            }

            res.push(char);
        }

        return res.join('')
    }
}
