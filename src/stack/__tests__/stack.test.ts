import { describe, expect, test } from "@jest/globals";
import { Stack } from "../stack";

const testItems = [1, 2, 3, 4, 5, 6, 7, 8];
const resItems = testItems.reduceRight<number[]>((acc, i) => [...acc, i], []);

describe("Queue", () => {
  test("push", () => {
    const s = new Stack<number>();

    for (let i of testItems) {
      s.push(i);
    }

    expect(s.pop()).toBe(8);
  });

  test("pop", () => {
    const s = new Stack<number>();

    for (let i of testItems) {
      s.push(i);
    }

    for (let i of resItems) {
      expect(s.pop()).toBe(i);
    }
  });

  test("isEmpty", () => {
    const s = new Stack<number>();
    expect(s.isEmpty()).toBe(true);
    s.push(10);
    expect(s.isEmpty()).toBe(false);
    s.pop();
    expect(s.isEmpty()).toBe(true);
  });

  test("isFull", () => {
    const s = new Stack<number>(testItems.length);
    expect(s.isFull()).toBe(false);
    for (const i of testItems) {
      s.push(i);
    }
    expect(s.isFull()).toBe(true);
  });

  test("peek", () => {
    const s = new Stack<number>(testItems.length);

    for (let i of testItems) {
      s.push(i);
      expect(s.peek()).toBe(i);
    }
  });

  test("throws an error on exceeded stack size", () => {
    const s = new Stack<number>(testItems.length);
    for (const i of testItems) {
      s.push(i);
    }

    expect(() => s.push(10)).toThrow();
  });
});
