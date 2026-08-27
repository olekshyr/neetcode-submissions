class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let total = 0;
        let left = 0;
        let right = height.length - 1;
        let leftMax = height[left];
        let rightMax = height[right];

        while (left < right) {
            if (leftMax > rightMax) {
                right--;
                if (height[right] < rightMax) {
                    total+=rightMax - height[right]
                } else {
                    rightMax = height[right];
                }
            } else {
                left++;
                if (height[left] < leftMax) {
                    total+=leftMax - height[left]
                } else {
                    leftMax = height[left]
                }
            }
        }

        return total
    }
}
