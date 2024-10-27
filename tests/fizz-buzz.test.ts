import { FizzBuzz } from "../src/FizzBuzz";

const fizzBuzzes = [
  "fizz",
  "buzz",
  "fizz",
  "fizz buzz",
  "fizz",
  "buzz",
  "fizz buzz",
  "fizz buzz",
  "fizz",
  "buzz",
  "fizz",
  "fizz buzz",
  "fizz",
  "fizz buzz",
  "fizz",
  "fizz buzz",
  "fizz",
  "buzz",
  "fizz",
  "fizz buzz",
];

describe("fizz buzz", (): void => {
  it("can generate", (): void => {
    for (let sequence = 1; sequence <= 20; sequence++) {
      expect(new FizzBuzz(sequence).generate()).toStrictEqual<string[]>(
        fizzBuzzes.slice(0, sequence),
      );
    }
  });
});
