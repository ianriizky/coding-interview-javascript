import { parseString } from "../helper";

export type Method = "reverse" | "loop" | "recursive";

export class Palindrome {
  value: string;

  constructor(value: string) {
    this.value = this.sanitize(parseString(value));
  }

  /**
   * Sanitize the given value by running some specific task.
   */
  protected sanitize(value: string): string {
    return value
      .replaceAll(" ", "")
      .replaceAll("-", "")
      .replaceAll(/[^A-Za-z0-9\-]/g, "")
      .toLowerCase();
  }

  /**
   * Determine whether the given value is a palindrome or not using reverse way.
   */
  evaluateUsingReverse(): boolean {
    let newValue = "";

    for (let index = this.value.length - 1; index >= 0; index--) {
      newValue += this.value[index];
    }

    return this.value === newValue;
  }

  /**
   * Determine whether the given value is a palindrome or not using loop way.
   */
  evaluateUsingLoop(): boolean {
    for (let index = 0; index < Math.floor(this.value.length / 2); index++) {
      const lastCharacterIndex = this.value.length - (index + 1);

      const firstCharacter = this.value[index];
      const lastCharacter = this.value[lastCharacterIndex];

      if (firstCharacter !== lastCharacter) {
        return false;
      }
    }

    return true;
  }

  /**
   * Determine whether the given value is a palindrome or not using recursive way.
   */
  evaluateUsingRecursive(index?: number): boolean {
    index ||= 0;

    if (index < Math.floor(this.value.length / 2)) {
      const lastCharacterIndex = this.value.length - (index + 1);

      const firstCharacter = this.value[index];
      const lastCharacter = this.value[lastCharacterIndex];

      if (firstCharacter !== lastCharacter) {
        return false;
      }

      return this.evaluateUsingRecursive(index + 1);
    }

    return true;
  }

  /**
   * Determine whether the given value is a palindrome or not.
   */
  evaluate(method: Method): boolean {
    if (method === "reverse") {
      return this.evaluateUsingReverse();
    } else if (method === "loop") {
      return this.evaluateUsingLoop();
    } else if (method === "recursive") {
      return this.evaluateUsingRecursive();
    } else {
      throw new TypeError("Method must be reverse, loop, or recursive.");
    }
  }

  /**
   * Return palindrome human-readable description.
   */
  generateStatus(method: Method): string {
    return this.evaluate(method)
      ? "Yes, this word is a palindrome."
      : "No, this word is not a palindrome.";
  }
}
