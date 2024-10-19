import { IStack } from "./interface";

export class Stack<T> implements IStack<T> {
  private stack: T[] = [];

  constructor(private maxSize?: number) {}

  isEmpty(): boolean {
    return this.stack.length === 0;
  }

  isFull(): boolean {
    return this.maxSize !== undefined && this.stack.length >= this.maxSize;
  }

  peek(): T | null {
    return this.stack.at(-1) ?? null;
  }

  pop(): T | null {
    return this.stack.pop() ?? null;
  }

  push(item: T): void {
    if (this.isFull()) {
      throw new Error("Stack is full");
    }

    this.stack.push(item);
  }
}
