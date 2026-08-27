class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s === t) return s;

        const tChars = new Map();
        const wChars = new Map();
        let res = [];
        let l = 0;
        let resLen = Infinity;
        let have = 0;
        

        for (let char of t) {
            tChars.set(char, !tChars.get(char) ? 1 :  tChars.get(char) + 1);
        }

        const need = tChars.size;

        for (let char of tChars.keys()) {
            wChars.set(char, 0);
        }

        for (let r in s) {
            let c = s[r];

            if (tChars.has(c)) {
                wChars.set(c, wChars.get(c) + 1);
            }

            if (tChars.get(c) && wChars.get(c) == tChars.get(c)) have++;

            while(have == need) {
                if (r - l + 1 < resLen) {
                    res = [l,r];
                    resLen = r -l + 1;
                }

                if (wChars.has(s[l])) {
                    wChars.set(s[l], wChars.get(s[l]) - 1);

                    if (tChars.get(s[l]) && wChars.get(s[l]) < tChars.get(s[l])) have--;
                }

                l++;
            }
        }

        return resLen === Infinity ? '' : s.slice(res[0], +res[1]+1);
    }
}
