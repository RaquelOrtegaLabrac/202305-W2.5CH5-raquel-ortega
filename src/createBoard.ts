const createBoard = (rows: number, columns: number) => {
  const arrayOfArrays: number[][] = [];

  for (let index = 0; index < columns; index++) {
    arrayOfArrays[index] = [];
    for (let j = 0; j < rows; j++) {
      arrayOfArrays[index][j] = Math.floor(Math.random() * 2);
    }
  }
  return arrayOfArrays;
};

export default createBoard;

// const killOrGiveLife = (cell) => {
//   if ()

// }

// export default createBoard;

// const checkSurroundingCells = () => {

// }
