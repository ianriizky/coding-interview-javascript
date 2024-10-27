const operands = [
  { word: "zero", value: 0 },
  { word: "one", value: 1 },
  { word: "two", value: 2 },
  { word: "three", value: 3 },
  { word: "four", value: 4 },
  { word: "five", value: 5 },
  { word: "six", value: 6 },
  { word: "seven", value: 7 },
  { word: "eight", value: 8 },
  { word: "nine", value: 9 },
];
const operators = ["plus", "minus", "times", "dividedBy"] as const;

type Operand = (typeof operands)[number]["value"];
type Operator = (typeof operators)[number];
type Handler = (operandRight: Operand) => number;

function parseOperand(word: string, handler?: Handler): number {
  const operandRight = operands.find((operand) => operand.word === word);

  if (!operandRight) {
    throw new TypeError("Operand word must be a number between 0-9.");
  }

  return handler ? handler(operandRight.value) : operandRight.value;
}

function parseOperator(operator: string, operandRight: Operand): Handler {
  if (!operators.includes(operator as Operator)) {
    throw new TypeError(
      "Operator word must be in plus (+), minus (-), times (*), or dividedBy (/).",
    );
  }

  return (operandLeft: Operand) =>
    Math.floor(execute(operandLeft, operator as Operator, operandRight));
}

function execute(
  operandLeft: Operand,
  operator: Operator,
  operandRight: Operand,
): number {
  switch (operator) {
    case "plus":
      return operandLeft + operandRight;

    case "minus":
      return operandLeft - operandRight;

    case "times":
      return operandLeft * operandRight;

    case "dividedBy":
      return operandLeft / operandRight;

    default:
      throw new TypeError(
        "Operator word must be in plus (+), minus (-), times (*), or dividedBy (/).",
      );
  }
}

export const zero = (handler?: Handler) => parseOperand("zero", handler);
export const one = (handler?: Handler) => parseOperand("one", handler);
export const two = (handler?: Handler) => parseOperand("two", handler);
export const three = (handler?: Handler) => parseOperand("three", handler);
export const four = (handler?: Handler) => parseOperand("four", handler);
export const five = (handler?: Handler) => parseOperand("five", handler);
export const six = (handler?: Handler) => parseOperand("six", handler);
export const seven = (handler?: Handler) => parseOperand("seven", handler);
export const eight = (handler?: Handler) => parseOperand("eight", handler);
export const nine = (handler?: Handler) => parseOperand("nine", handler);

export const plus = (n: Operand) => parseOperator("plus", n);
export const minus = (n: Operand) => parseOperator("minus", n);
export const times = (n: Operand) => parseOperator("times", n);
export const dividedBy = (n: Operand) => parseOperator("dividedBy", n);
