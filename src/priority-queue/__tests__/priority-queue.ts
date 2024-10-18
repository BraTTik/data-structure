import { describe, expect, test } from "@jest/globals";
import { PriorityQueue } from "../priority-queue";

describe("PriorityQueue", () => {
  test("isFull", () => {
    const q = new PriorityQueue<number>(5);

    for (let i = 0; i < 5; i++) {
      q.push(i, i);
    }

    expect(q.isFull()).toBe(true);
    expect(() => q.push(7, 7)).toThrow();
  });

  test("isEmpty", () => {
    const q = new PriorityQueue<number>(5);
    expect(q.isEmpty()).toBe(true);
    q.push(44, 1);
    expect(q.isEmpty()).toBe(false);
  });

  test("push", () => {
    const q = new PriorityQueue<number>();
    q.push(5, 5);
    expect(q.peek()).toBe(5);
    q.push(4, 4);
    expect(q.peek()).toBe(4);
    q.push(6, 6);
    expect(q.peek()).toBe(4);
    q.push(2, 2);
    expect(q.peek()).toBe(2);
  });

  test("pop", () => {
    const q = new PriorityQueue<number>();
    q.push(5, 5);
    q.push(4, 4);
    q.push(6, 6);
    q.push(2, 2);

    expect(q.pop()).toBe(2);
    expect(q.pop()).toBe(4);
    expect(q.pop()).toBe(5);
    expect(q.pop()).toBe(6);
  });

  test("it pushes in right order", () => {
    const q = new PriorityQueue<number>();

    q.push(1, 1);
    q.push(2, 1);
    q.push(4, 2);
    q.push(3, 1);
    q.push(5, 3);

    expect(q.pop()).toBe(1);
    expect(q.pop()).toBe(2);
    expect(q.pop()).toBe(3);
    expect(q.pop()).toBe(4);
    expect(q.pop()).toBe(5);
  });
});
