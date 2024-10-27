# Fibonacci

In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones. Numbers that are part of the Fibonacci sequence are known as Fibonacci numbers, commonly denoted F<sub>n</sub> . Many writers begin the sequence with 0 and 1, although some authors start it from 1 and 1 and some (as did Fibonacci) from 1 and 2. Starting from 0 and 1, the sequence begins

> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ....

In the fibonacci case study in [this](index.ts) source code, there are 2 methods that can be used to generate fibonacci sequence. These methods include:

## Loop method<sup id="pg3">[3](#fn3)</sup>

This function below generates a Fibonacci sequence of a specified length `this.sequence`, adding each calculated term to the result array by iteratively summing the two previous terms.

An example of the loop method can be seen in the source code below.

```js
function generateUsingLoop(): number[] {
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
```

## Recursive method<sup id="pg5">[5](#fn5)</sup>

Similar like the function above, but using recursive way to calculating each term with the helper function `get` which sums the two preceding terms and then appends each term to the result array as can be seen in the source code below.

```js
function generateUsingRecursive(): number[] {
  let result = [];

  const get = (n: number): number =>
    n < 1 ? 0 : n <= 2 ? 1 : get(n - 1) + get(n - 2);

  for (let index = 0; index < this.sequence; index++) {
    const current = get(index);

    result.push(current);
  }

  return result;
}
```

## Footnote

<strong id="fn1">1</strong> [Fibonacci, Wikipedia](https://en.wikipedia.org/wiki/Fibonacci_sequence). [↩](#pg1)
