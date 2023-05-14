import { createBoard } from "./createBoard.js";
import { printBoard } from "./createBoard.js";

let generation = 0;

setInterval(() => {
  const randomBoard = createBoard(10, 10);
  console.log(printBoard(randomBoard));
  generation++;
  console.log(`Generation: ${generation}`);
}, 300);
