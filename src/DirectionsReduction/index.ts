export const directions = ["NORTH", "SOUTH", "WEST", "EAST"] as const;

export type Direction = (typeof directions)[number];
export type Directions = Direction[];

export function dirReduc(directions: Directions) {
  const pattern: RegExp = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;

  let str = directions.join("");

  while (pattern.test(str)) {
    str = str.replace(pattern, "");
  }

  return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}
