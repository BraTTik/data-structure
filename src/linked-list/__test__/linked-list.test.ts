import { describe, expect, test } from "@jest/globals";
import { LinkedList } from "../linked-list";

describe("Linked List", () => {
  test("unshift", () => {
    const l = new LinkedList<number>();
    expect(l.isEmpty()).toBe(true);
    l.unshift(1);
    expect(l.isEmpty()).toBe(false);
  });

  test("shift", () => {
    const l = new LinkedList<number>();
    l.unshift(1);
    expect(l.shift()).toBe(1);
  });

  test("first", () => {
    const l = new LinkedList<number>();
    expect(l.shift()).toBe(null);

    l.unshift(1);
    const first = l.first();
    expect(first?.data).toBe(1);
    expect(first?.next).toBe(null);

    l.unshift(2);
    expect(l.first()?.next).toBeTruthy();
  });

  test("linked items chain", () => {
    const l = new LinkedList<number>();
    for (let i = 10; i > 0; i--) {
      l.unshift(i);
    }
    let current = l.first();
    for (let i = 1; i <= 10; i++) {
      expect(current?.data).toBe(i);
      current = current?.next ?? null;
    }
    expect(current).toBe(null);
  });
});
