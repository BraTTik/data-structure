export type QueueArgs<T> = { maxSize?: number; items?: Iterable<T> };

export interface IQueue<T> {
  push(value: T): IQueue<T>;
  pop(): T | null;
  peek(): T | null;
  isFull(): boolean;
  isEmpty(): boolean;
  size(): number;
}
