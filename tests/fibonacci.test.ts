import { Fibonacci, Method } from "../src/Fibonacci";

const fibonaccis = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584,
  4181,
];
const methods = ["loop", "recursive"] satisfies Method[];

describe("fibonacci", () => {
  it("can generate using loop method", () => {
    for (let sequence = 1; sequence <= 20; sequence++) {
      expect(new Fibonacci(sequence).generateUsingLoop()).toStrictEqual<
        number[]
      >(fibonaccis.slice(0, sequence));
    }
  });

  it("can generate using recursive method", () => {
    for (let sequence = 1; sequence <= 20; sequence++) {
      expect(new Fibonacci(sequence).generateUsingRecursive()).toStrictEqual<
        number[]
      >(fibonaccis.slice(0, sequence));
    }
  });

  it("can generate using random method", () => {
    for (let sequence = 1; sequence <= 20; sequence++) {
      expect(
        new Fibonacci(sequence).generate(
          methods[Math.floor(Math.random() * methods.length)],
        ),
      ).toStrictEqual<number[]>(fibonaccis.slice(0, sequence));
    }
  });

  it("throw an error if using unknown method", () => {
    // @ts-expect-error
    expect(() => new Fibonacci(1).generate("abcde")).toThrow(TypeError);
  });
});
