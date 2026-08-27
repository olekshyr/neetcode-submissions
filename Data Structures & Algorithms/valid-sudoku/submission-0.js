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

        for (let i = 0; i < 9; i++) {
            let row = board[i]
            if (hasDuplicates(row)) return false;
        }

        for (let i = 0; i < 9; i++) {
            let column = [];

            for (let j = 0; j < 9; j++) {
                column.push(board[j][i])
            }

            if (hasDuplicates(column)) return false;
        }

        const cells = {};

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let number = board[i][j];

                let cellNumber = Math.floor(i / 3) + '_' + Math.floor(j / 3);
                if (cells[cellNumber]) {
                    cells[cellNumber].push(number)
                } else {
                    cells[cellNumber] = [number]
                }
            }
        }

        const cellsNumbers = Object.values(cells);

        for (let i = 0; i < 9; i++) {
            if (hasDuplicates(cellsNumbers[i])) return false;
        }

        return true;
    }
}
