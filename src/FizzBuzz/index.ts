import { parseNumber } from "../helper";

export class FizzBuzz {
  sequence: number;

  constructor(sequence: number) {
    this.sequence = parseNumber(sequence);
  }

  /**
   * Create an array filled by "fizz", "buzz", or "fizz buzz" based on
   * this requirement below (highest priority from above).
   *
   * Muliples of 4 or 7: "fizz buzz"
   * Odd sequence: "fizz"
   * Even sequence: "buzz"
   */
  generate(): string[] {
    let result = [];

    for (let index = 1; index <= this.sequence; index++) {
      if (index % 4 === 0 || index % 7 === 0) {
        result.push("fizz buzz");
      } else if (index % 2 === 1) {
        result.push("fizz");
      } else if (index % 2 === 0) {
        result.push("buzz");
      }
    }

    return result;
  }
}
