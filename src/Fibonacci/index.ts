import { parseNumber } from "../helper";

export type Method = (typeof Fibonacci.methods)[number];

export class Fibonacci {
  sequence: number;

  static methods = ["loop", "recursive"] as const;

  /**
   * @param {number} sequence
   */
  constructor(sequence: number) {
    this.sequence = parseNumber(sequence);
  }

  /**
   * Create an array filled by fibonacci sequence using loop way.
   */
  generateUsingLoop(): number[] {
    let result = [];
    let prev = 0;
    let next = 1;

    for (let index = 0; index < this.sequence; index++) {
      result.push(prev);

      const current = prev + next;
      prev = next;
      next = current;
    }

    return result;
  }

  /**
   * Create an array filled by fibonacci sequence using recursive way.
   */
  generateUsingRecursive(): number[] {
    let result = [];

    const get = (n: number): number =>
      n < 1 ? 0 : n <= 2 ? 1 : get(n - 1) + get(n - 2);

    for (let index = 0; index < this.sequence; index++) {
      const current = get(index);

      result.push(current);
    }

    return result;
  }

  /**
   * Create an array filled by fibonacci sequence.
   */
  generate(method: Method) {
    if (method === "loop") {
      return this.generateUsingLoop();
    } else if (method === "recursive") {
      return this.generateUsingRecursive();
    } else {
      throw new TypeError(
        `Method must be one of this: ${Fibonacci.methods.join(",")}.`,
      );
    }
  }
}
