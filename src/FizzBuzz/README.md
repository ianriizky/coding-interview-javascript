# Fizz Buzz

Fizz Buzz is a word grouping game for children to teach them about division. Players take turns to count in stages, with the rule that every multiple of three is replaced with the word "fizz", every multiple of five is replaced with the word "buzz", and every multiple of three and five is replaced with the word "fizz buzz". This case study is often used by interviewers to select prospective employees during coding interviews at companies by asking them to write a specific program code to produce the first 100 Fizz Buzz<sup id="pg1">[1](#fn1)</sup>.

The following is an example of the source code of the Fizz Buzz case study using the TypeScript programming language<sup id="pg2">[2](#fn2)</sup>. Full details can be seen [here](index.ts).

```js
function generate(): string[] {
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
```

## Footnote

<strong id="fn1">1</strong> [Fizz buzz, Wikipedia](https://en.wikipedia.org/wiki/Fizz_buzz). [↩](#pg1)
<br>
<strong id="fn2">2</strong> [Programmer Zaman Now - Coding Interview Fizz Buzz](https://www.youtube.com/watch?v=FKHV-i7UUvI). [↩](#pg2)
<br>
