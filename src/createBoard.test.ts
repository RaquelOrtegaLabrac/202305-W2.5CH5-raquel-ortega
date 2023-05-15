import { createBoard, printBoard } from "./createBoard";

describe("Given a createBoard function", () => {
  describe("When it receives 4, 3", () => {
    test("Then it should returns 3", () => {
      const rows = 4;
      const columns = 3;

      const result = createBoard(rows, columns);
      const expectedResult = 3;
      expect(result).toHaveLength(expectedResult);
    });
  });
});

describe("Given a printBoard function", () => {
  describe("When it receives a nested array of 0s and 1s", () => {
    test("Then it should return it as a string, where the 0s are turned into ⬛, the 1s are turned into ⬜ and at the end of every array in the main array it injects a breakline", () => {
      const randomBoard: number[][] = [
        [0, 0, 0, 0, 0],
        [1, 1, 0, 1, 1],
        [0, 0, 0, 0, 0],
      ];

      const result = printBoard(randomBoard);
      const expectedResult = `⬛⬛⬛⬛⬛\n⬜⬜⬛⬜⬜\n⬛⬛⬛⬛⬛\n`;
      expect(result).toBe(expectedResult);
    });
  });
});
