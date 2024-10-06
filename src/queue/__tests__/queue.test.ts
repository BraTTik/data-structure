import { describe, expect, test } from "@jest/globals";
import { Queue } from "../queue";

const testItems = [1, 2, 3, 4, 5, 6, 7, 8];

describe("Queue", () => {
  test("pushes item and pop it", () => {
    const q = new Queue<number>();
    expect(q.isEmpty()).toBe(true);

    const testItem = 1001;
    q.push(testItem);

    expect(q.size()).toBe(1);
    expect(q.isEmpty()).toBe(false);
    expect(q.peek()).toBe(testItem);
    expect(q.pop()).toBe(testItem);
    expect(q.size()).toBe(0);
    expect(q.isEmpty()).toBe(true);
  });

  test("limits the max size", () => {
    const q = new Queue<number>({ maxSize: 3 });

    for (const item of testItems) {
      q.push(item);
    }

    expect(q.isFull()).toBe(true);
    expect(q.size()).toBe(3);
    expect(q.peek()).toBe(1);

    for (let i = 1; i <= 3; i++) {
      expect(q.pop()).toBe(i);
    }
  });

  test("initialize with items", () => {
    const q = new Queue({ items: testItems });

    expect(q.size()).toBe(testItems.length);
    expect(q.isFull()).toBe(false);

    testItems.forEach((item) => {
      const qItem = q.pop();
      expect(qItem).toBe(item);
    });

    expect(q.isEmpty()).toBe(true);
  });

  test("initialize with items and max size", () => {
    const q = new Queue({ items: testItems, maxSize: 3 });

    expect(q.isFull()).toBe(true);
    expect(q.size()).toBe(3);

    const qSize = q.size();

    for (let i = 0; i < qSize; i++) {
      expect(q.peek()).toBe(testItems[i]);
      expect(q.pop()).toBe(testItems[i]);
    }

    expect(q.isFull()).toBe(false);
    expect(q.isEmpty()).toBe(true);
  });
});
