
export interface IQueue<T> {
  push(value: T, priority: number): void;
  pop(): T | null;
  peek(): T | null;
  isFull(): boolean;
  isEmpty(): boolean;
  size(): number;
}
