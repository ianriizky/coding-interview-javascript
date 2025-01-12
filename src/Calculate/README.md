# Calculating with Functions

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

```js
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
```

## Requirements

- There must be a function for each number from 0 ("zero") to 9 ("nine")
- There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
- Each calculation consist of exactly one operation and two numbers
- The most outer function represents the left operand, the most inner function represents the right operand
- Division should be **integer division**. For example, this should return `2`, not `2.666666...`:

  ```js
  eight(dividedBy(three()));
  ```

## Footnote

- [Calculating with Functions - Codewars](https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript)
