class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
    function hasDuplicates(arr) {
        const nums = arr.filter(num => num != '.');
        return (new Set(nums)).size != nums.length; 
    }
    const cells = new Map();

    for (let i = 0; i < 9; i++) {
        let row = board[i]
        if (hasDuplicates(row)) return false;
    }

    for (let i = 0; i < 9; i++) {
        let column = [];

        for (let j = 0; j < 9; j++) {
            let cellNumber = Math.floor(i / 3) + '_' + Math.floor(j / 3);
             if (cells.get(cellNumber)) {
                cells.get(cellNumber).push(board[i][j])
            } else {
                cells.set(cellNumber, [board[i][j]])
            }

            column.push(board[j][i])
        }

        if (hasDuplicates(column)) return false;
    }

    const cellsNumbers = Array.from(cells.values());

    for (let i = 0; i < 9; i++) {
        if (hasDuplicates(cellsNumbers[i])) return false;
    }

    return true;}
    
}
