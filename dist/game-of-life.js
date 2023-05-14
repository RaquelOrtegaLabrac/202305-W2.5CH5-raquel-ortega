"use strict";
const createBoard = (rows, columns) => {
    const arrayOfArrays = [];
    for (let index = 0; index < columns; index++) {
        arrayOfArrays[index] = [];
        for (let j = 0; j < rows; j++) {
            arrayOfArrays[index][j] = Math.floor(Math.random() * 2);
        }
    }
    console.log(arrayOfArrays);
};
createBoard(4, 3);
