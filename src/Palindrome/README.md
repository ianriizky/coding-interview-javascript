# Palindrome

A palindrome is a word, phrase, number or other arrangement that can be read the same both forwards and backwards (spaces between letters are usually allowed). The word "palindrome" comes from the Greek: palin (πάλιν; "again") and dromos (δρóμος; "direction")<sup id="pg1">[1](#fn1)</sup>.

In the palindrome case study in [this](index.ts) source code, there are 3 methods that can be used to check whether a given word or sentence is a palindrome or not. These methods include:

## Reverse method<sup id="pg2">[2](#fn2)</sup>

In this method, the given word will be broken down per character and then rearranged in reverse. So that the earliest character will change to the last sequence and vice versa. The result of the new character arrangement is then matched with the original word. If both words have the same value, then it is certain that the word is a palindrome.

An example of the reverse method can be seen in the source code below.

```php
const value = "katak";
let newValue = "";

for (let index = this.value.length - 1; index >= 0; index--) {
  newValue += this.value[index];
}

return this.value === newValue;
```

## Loop method<sup id="pg3">[3](#fn3)</sup>

Unlike the previous method, this time the loop method will repeat a number of given characters. In each iteration, the characters in the sequence will be matched with the characters from the reverse sequence as can be seen in the table below. If in each iteration both characters from each sequence match, then it is certain that the word is a palindrome.

| Old character | Old sequence | New sequence | New character |
| :-----------: | -----------: | :----------- | :-----------: |
|       k       |            1 | 5            |       k       |
|       a       |            2 | 4            |       a       |
|       t       |            3 | 3            |       t       |
|       a       |            4 | 2            |       a       |
|       k       |            5 | 1            |       k       |

An example of the loop method can be seen in the source code below.

```js
$value = "katak";

for (let index = 0; index < Math.floor(this.value.length / 2); index++) {
  const lastCharacterIndex = this.value.length - (index + 1);

  const firstCharacter = this.value[index];
  const lastCharacter = this.value[lastCharacterIndex];

  if (firstCharacter !== lastCharacter) {
    return false;
  }
}

return true;
```

There is an optimization done on the source code above, where the loop limit `this.value.length / 2` is optimized to `Math.floor(this.value.length / 2)` so that there is no double checking during the loop process <sup id="pg4">[4](#fn4)</sup>.

## Recursive method<sup id="pg5">[5](#fn5)</sup>

This method is almost the same in principle as the loop method explained previously. The difference from this recursive method lies only in the elimination of the `for()` loop and the loop limit check is replaced with `if (index < Math.floor(this.value.length / 2))` so that it produces the same function call recursively as can be seen in the source code below.

```js
this.value = "katak";

function evaluateUsingRecursive(index?: number): boolean {
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
```

## Footnote

<strong id="fn1">1</strong> [Palindrome, Wikipedia](https://en.wikipedia.org/wiki/Palindrome). [↩](#pg1)
<br>
<strong id="fn2">2</strong> [Programmer Zaman Now - Coding Interview Palindrome (Solusi Palindrome)](https://www.youtube.com/watch?v=DXQuiPKl79Y&t=250s). [↩](#pg2)
<br>
<strong id="fn3">3</strong> [Programmer Zaman Now - Coding Interview Palindrome (Solusi Tanpa Reverse String)](https://www.youtube.com/watch?v=DXQuiPKl79Y&t=763s). [↩](#pg3)
<br>
<strong id="fn4">4</strong> [Programmer Zaman Now - Coding Interview Palindrome (Optimasi Iterasi Palindrome)](https://www.youtube.com/watch?v=DXQuiPKl79Y&t=1281s). [↩](#pg4)
<br>
<strong id="fn5">5</strong> [Programmer Zaman Now - Coding Interview Palindrome (Solusi Recursive)](https://www.youtube.com/watch?v=DXQuiPKl79Y&t=1472s). [↩](#pg5)
