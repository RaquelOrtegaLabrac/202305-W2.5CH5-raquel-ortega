import { createBoard, printBoard } from "./createBoard.js";
import { getNextGenerationBoard } from "./checkSurroundingCells.js";
const playGameOfLife = (rows, columns) => {
    let generation = 0;
    const board = createBoard(rows, columns);
    console.log(printBoard(board));
    setInterval(() => {
        console.clear();
        const nextGeneration = getNextGenerationBoard(board);
        console.log(printBoard(nextGeneration));
        generation++;
        console.log(`Generation: ${generation}`);
    }, 200);
};
playGameOfLife(3, 3);
