import { square, cube } from "../index";

describe("square()", () => {
  it("correctly calculates the square of 4", () => {
    expect(square(4)).toBe(16);
  });

  it("correctly calculates the square of -10", () => {
    expect(square(-10)).toBe(100);
  });
});
