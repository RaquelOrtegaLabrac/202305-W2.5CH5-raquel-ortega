export const createBoard = (rows, columns) => {
    const arrayOfArrays = [];
    for (let index = 0; index < columns; index++) {
        arrayOfArrays[index] = [];
        for (let j = 0; j < rows; j++) {
            arrayOfArrays[index][j] = Math.floor(Math.random() * 2);
        }
    }
    return arrayOfArrays;
};
export const printBoard = (board) => {
    console.clear();
    let printedBoard = "";
    for (let index = 0; index < board.length; index++) {
        for (let j = 0; j < board[index].length; j++) {
            if (board[index][j] === 1) {
                printedBoard += "⬜";
            }
            if (board[index][j] === 0) {
                printedBoard += "⬛";
            }
        }
        printedBoard += "\n";
    }
    return printedBoard;
};
