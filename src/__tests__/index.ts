import { square, cube } from "../index";

describe("square()", () => {
  it("correctly calculates the square of 4", () => {
    expect(square(4)).toBe(16);
  });

  it("correctly calculates the square of -10", () => {
    expect(square(-10)).toBe(100);
  });
});

describe("cube()", () => {
  it("correctly calculates the cube of 4", () => {
    expect(cube(4)).toBe(64);
  });

  it("correctly calculates the square of -10", () => {
    expect(cube(-10)).toBe(-1000);
  });
});
