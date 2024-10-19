import { toPostfix } from "../to-postfix";
import { describe, expect, test } from "@jest/globals";

const TestData: { data: string; result: string }[] = [
  {
    data: "A+B-C",
    result: "AB+C-",
  },
  {
    data: "A*B/C",
    result: "AB*C/",
  },
  {
    data: "A+B*C",
    result: "ABC*+",
  },
  {
    data: "A*B+C",
    result: "AB*C+",
  },
  {
    data: "A*(B+C)",
    result: "ABC+*",
  },
  {
    data: "A*B+C*D",
    result: "AB*CD*+",
  },
  {
    data: "(A+B)*(C-D)",
    result: "AB+CD-*",
  },
  {
    data: "((A+B)*C)-D",
    result: "AB+C*D-",
  },
  {
    data: "A+B*(C-D/(E+F))",
    result: "ABCDEF+/-*+",
  },
];

describe("toPostfix", () => {
  test.each(TestData)("converts $data to $result", (test) => {
    expect(toPostfix(test.data)).toBe(test.result);
  });
});
