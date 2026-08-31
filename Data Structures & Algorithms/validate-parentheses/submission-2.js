class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 > 0) return false;
        const stack = [];

        for (let i = 0; i<s.length; i++) {
            const char = s.charAt(i);
            
            if (char === '[' || char === '{' || char === '(') {
                stack.push(char) 
            } else if (char === ')') {
                if (stack.pop() !== '(') return false;
            } else if (char === '}') {
                if (stack.pop() !== '{') return false;
            } else if (char === ']') {
                if (stack.pop() !== '[') return false;
            }
        }

        if (stack.length > 0) return false;

        return true;
    }
}
