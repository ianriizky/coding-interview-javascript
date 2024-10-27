import shuffle from "lodash/shuffle";
import { dirReduc, type Directions } from "../src/DirectionsReduction";

const doTest = (input: Directions, expected: Directions) => {
  const actual = dirReduc(input);

  it(`return correct value for ${JSON.stringify(input)}`, () => {
    expect(actual).toStrictEqual(expected);
  });
};

describe("fixed directions reduction", () => {
  doTest(
    ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"],
    ["WEST"],
  );
  doTest(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"], []);
  doTest(
    ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "NORTH"],
    ["NORTH"],
  );
  doTest(
    [
      "EAST",
      "EAST",
      "WEST",
      "NORTH",
      "WEST",
      "EAST",
      "EAST",
      "SOUTH",
      "NORTH",
      "WEST",
    ],
    ["EAST", "NORTH"],
  );
  doTest(
    [
      "NORTH",
      "EAST",
      "NORTH",
      "EAST",
      "WEST",
      "WEST",
      "EAST",
      "EAST",
      "WEST",
      "SOUTH",
    ],
    ["NORTH", "EAST"],
  );
  doTest(
    ["NORTH", "WEST", "SOUTH", "EAST"],
    ["NORTH", "WEST", "SOUTH", "EAST"],
  );
});

describe("random directions reduction", () => {
  const rr: Array<Directions> = [
    ["NORTH", "EAST"],
    ["EAST", "SOUTH"],
    ["SOUTH", "WEST"],
    ["WEST", "NORTH"],
    ["NORTH", "NORTH", "NORTH"],
  ];

  shuffle(rr).forEach((res) => {
    let aa: Directions = ["NORTH", "SOUTH"];
    let bb: Directions = ["EAST", "WEST"];

    const rnd = () => ~~(Math.random() * 2);
    const input = res.slice(0);

    for (let x = 0, z = 2 + rnd(); x < z; x++) {
      let a = rnd();
      let b = rnd();

      if (x % 2) {
        input.push(aa[a]);
        input.push(aa[(a + 1) % 2]);
        input.unshift(bb[b]);
        input.unshift(bb[(b + 1) % 2]);
      } else {
        input.push(bb[b]);
        input.push(bb[(b + 1) % 2]);
        input.unshift(aa[a]);
        input.unshift(aa[(a + 1) % 2]);
      }
    }

    doTest(input, res);
  });
});
