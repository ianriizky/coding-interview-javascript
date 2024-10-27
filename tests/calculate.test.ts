import * as c from "../src/Calculate";

describe("static example calculations", (): void => {
  it("return 35 when seven(times(five()))", (): void => {
    expect(c.seven(c.times(c.five()))).toBe(35);
  });

  it("return 13 when four(plus(nine()))", (): void => {
    expect(c.four(c.plus(c.nine()))).toBe(13);
  });

  it("return 5 when eight(minus(three()))", (): void => {
    expect(c.eight(c.minus(c.three()))).toBe(5);
  });

  it("return 3 when six(dividedBy(two()))", (): void => {
    expect(c.six(c.dividedBy(c.two()))).toBe(3);
  });

  it("return 2 when eight(dividedBy(three()))", (): void => {
    expect(c.eight(c.dividedBy(c.three()))).toBe(2);
  });
});

describe("random calculations", (): void => {
  const NUMBERS = [
    c.zero,
    c.one,
    c.two,
    c.three,
    c.four,
    c.five,
    c.six,
    c.seven,
    c.eight,
    c.nine,
  ];

  const randInt = (a: number, b: number) =>
    Math.floor(a + Math.random() * (b - a + 1));

  const doTest = (op: Function, solutionFunc: Function) => {
    const a = randInt(0, 9);
    const b = randInt(op === c.dividedBy ? 1 : 0, 9); // no division by 0

    const aFunc = NUMBERS[a];
    const bFunc = NUMBERS[b];

    const actual = aFunc(op(bFunc()));
    const expected = solutionFunc(a, b);

    it(`return ${expected} when ${aFunc.name}(${op.name}(${bFunc.name}()))`, (): void => {
      expect(actual).toBe(expected);
    });
  };

  for (let index = 0; index < 50; index++) {
    doTest(c.plus, (a: number, b: number) => a + b);
    doTest(c.minus, (a: number, b: number) => a - b);
    doTest(c.times, (a: number, b: number) => a * b);
    doTest(c.dividedBy, (a: number, b: number) => Math.floor(a / b));
  }
});
