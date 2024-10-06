import { IQueue, QueueArgs } from "./interface";

export class Queue<T> implements IQueue<T> {
  private maxSize: number | null = null;
  private items: Array<T> = [];

  constructor(args?: QueueArgs<T>) {
    const { maxSize, items } = args ?? {};
    if (maxSize) {
      this.maxSize = maxSize;
    }

    if (items) {
      const iterator = items[Symbol.iterator]();
      let next = iterator.next();

      while (!next.done) {
        this.push(next.value);
        if (this.isFull()) {
          break;
        }
        next = iterator.next();
      }
    }
  }

  public push(value: T): IQueue<T> {
    if (!this.isFull()) {
      this.items.unshift(value);
    }

    return this;
  }

  public peek() {
    return this.items.at(-1) ?? null;
  }

  public pop(): T | null {
    return this.items.pop() ?? null;
  }

  public size(): number {
    return this.items.length;
  }

  public isEmpty(): boolean {
    return this.items.length === 0;
  }

  public isFull() {
    return this.maxSize !== null && this.items.length >= this.maxSize;
  }
}
