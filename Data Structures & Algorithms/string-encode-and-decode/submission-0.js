class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = '';

        for (let s of strs) {
            encoded += s.length + "#" + s;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            
            while(str[j] != '#') {
                j++;
            }

            let len = parseInt(str.substring(i,j));
            i = j + 1;
            j = i + len;

            res.push(str.substring(i,j));
            i = j;
        }

        return res;
    }
}
