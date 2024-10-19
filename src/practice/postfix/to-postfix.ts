import { Stack } from "../../stack";

const operatorPriority = (operator: string) =>
  operator === "*" || operator === "/" ? 2 : 1;

export const toPostfix = (s: string): string => {
  let output = "";
  const operatorsStack = new Stack<string>();

  const handleOperator = (operator: string) => {
    if (operatorsStack.isEmpty()) {
      operatorsStack.push(operator);
    } else {
      while (!operatorsStack.isEmpty()) {
        const topOperator = operatorsStack.pop()!;
        if (topOperator === "(") {
          operatorsStack.push(topOperator);
          break;
        } else {
          if (operatorPriority(topOperator) < operatorPriority(operator)) {
            operatorsStack.push(topOperator);
            break;
          } else {
            output += topOperator;
          }
        }
      }
      operatorsStack.push(operator);
    }
  };

  const handleParen = () => {
    while (!operatorsStack.isEmpty()) {
      const top = operatorsStack.pop()!;
      if (top === "(") {
        break;
      } else {
        output += top;
      }
    }
  };

  for (let ch of s) {
    switch (ch) {
      case "+":
      case "-":
      case "*":
      case "/":
        handleOperator(ch);
        break;
      case "(":
        operatorsStack.push(ch);
        break;
      case ")":
        handleParen();
        break;
      default:
        output += ch;
    }
  }

  while (!operatorsStack.isEmpty()) {
    output += operatorsStack.pop();
  }

  return output;
};
