export interface IStack<T> {
  push(item: T): void;
  pop(): T | null;
  isFull(): boolean;
  isEmpty(): boolean;
  peek(): T | null;
}
