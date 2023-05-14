import createBoard from "./createBoard.js";

const randomBoard = createBoard(10, 10);

const gameOfLife = () => {
  console.log(randomBoard);
};

gameOfLife();
