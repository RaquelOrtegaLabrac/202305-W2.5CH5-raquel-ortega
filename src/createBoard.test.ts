import createBoard from "./createBoard";

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
