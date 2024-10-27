export function parseNumber(value: any): number {
  value = Number(value);

  if (isNaN(value) || value < 0) {
    throw new RangeError("n must be a number and bigger or equal than 0.");
  }

  return value;
}

export function parseString(value: any): string {
  return `${value}`;
}
