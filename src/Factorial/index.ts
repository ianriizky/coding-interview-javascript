import { parseNumber } from "../helper";

export type Method = (typeof Factorial.methods)[number];

export class Factorial {
  n: number;

  static methods = ["loop", "recursive", "tail recursive"] as const;

  constructor(n: number) {
    this.n = parseNumber(n);
  }

  /**
   * Count factorial number from the given "n" value using loop way.
   */
  countUsingLoop(): number {
    let result = 1;

    for (let index = this.n; index > 0; index--) {
      result = result * index;
    }

    return result;
  }

  /**
   * Count factorial number from the given "n" value using recursive way.
   */
  countUsingRecursive(): number {
    if (this.n < 2) {
      return 1;
    }

    const n = this.n;
    this.n = n - 1;

    return n * this.countUsingRecursive();
  }

  /**
   * Count factorial number from the given "n" value using tail recursive way.
   */
  countUsingTailRecursive(): number {
    let result = 1;

    const count = () => {
      if (this.n < 1) {
        return result;
      }

      result *= this.n;
      this.n--;

      return count();
    };

    return count();
  }

  /**
   * Count factorial number from the given "n" value.
   */
  count(method: Method): number {
    if (method === "loop") {
      return this.countUsingLoop();
    } else if (method === "recursive") {
      return this.countUsingRecursive();
    } else if (method === "tail recursive") {
      return this.countUsingTailRecursive();
    } else {
      throw new TypeError(
        `Method must be one of this: ${Factorial.methods.join(",")}.`,
      );
    }
  }
}
