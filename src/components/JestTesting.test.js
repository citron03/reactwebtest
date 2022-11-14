import { plus } from "./JestTesting";

test("plus function", () => {
  expect(plus(1, 2)).toBe(3);
});
