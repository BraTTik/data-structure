import { ILinkedItem } from "./interface";

export class LinkedItem<T> implements ILinkedItem<T> {
  data: T;
  next: ILinkedItem<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}
