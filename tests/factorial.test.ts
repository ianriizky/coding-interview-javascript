import { Factorial, type Method } from "../src/Factorial";

const factorials = new Map([
  [1, 1],
  [2, 2],
  [3, 6],
  [4, 24],
  [5, 120],
  [6, 720],
  [7, 5040],
  [8, 40320],
  [9, 362880],
  [10, 3628800],
  [11, 39916800],
  [12, 479001600],
  [13, 6227020800],
  [14, 87178291200],
  [15, 1307674368000],
  [16, 20922789888000],
  [17, 355687428096000],
  [18, 6402373705728000],
]);
const methods = ["loop", "recursive"] satisfies Method[];

describe("factorial", (): void => {
  it("can count using loop method", (): void => {
    factorials.forEach((result, number) => {
      expect(new Factorial(number).countUsingLoop()).toBe(result);
    });
  });

  it("can count using recursive method", (): void => {
    factorials.forEach((result, number) => {
      expect(new Factorial(number).countUsingRecursive()).toBe(result);
    });
  });

  it("can count using tail recursive method", (): void => {
    factorials.forEach((result, number) => {
      expect(new Factorial(number).countUsingTailRecursive()).toBe(result);
    });
  });

  it("can count using random method", (): void => {
    factorials.forEach((result, number) => {
      expect(
        new Factorial(number).count(
          methods[Math.floor(Math.random() * methods.length)],
        ),
      ).toBe(result);
    });
  });

  it("throw an error if using unknown method", (): void => {
    // @ts-expect-error
    expect(() => new Factorial(1).count("abcde")).toThrow(TypeError);
  });
});
