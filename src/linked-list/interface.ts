export interface ILinkedItem<T> {
  data: T;
  next: ILinkedItem<T> | null;
}

export interface ILinkedList<T> {
  first(): ILinkedItem<T> | null;
  isEmpty(): boolean;
  unshift(data: T): void;
  shift(): T | null;
}
