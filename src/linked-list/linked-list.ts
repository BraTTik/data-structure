import { ILinkedList, ILinkedItem } from "./interface";
import { LinkedItem } from "./linked-item";

export class LinkedList<T> implements ILinkedList<T> {
  private _first: ILinkedItem<T> | null = null;

  public first() {
    return this._first;
  }

  public isEmpty(): boolean {
    return this._first === null;
  }

  shift(): T | null {
    if (this.isEmpty()) return null;

    const shifted = this._first!;
    const nextItem = this._first!.next;
    this._first = nextItem;
    shifted.next = null;

    return shifted?.data || null;
  }

  unshift(data: T): void {
    if (this.isEmpty()) {
      this._first = new LinkedItem(data);
    } else {
      const item = new LinkedItem(data);
      item.next = this._first;
      this._first = item;
    }
  }

  delete(data: T): ILinkedItem<T> | null {
    let current = this._first;
    let previous = this._first;
    while (current && current.data !== data) {
      previous = current;
      current = current && current.next;
    }
    if (current === this._first) {
      this._first = this._first?.next ?? null;
    } else if (previous && current) {
      previous.next = current.next;
    }
    if (current) {
      current.next = null;
    }

    return current;
  }

  find(data: T): ILinkedItem<T> | null {
    let current = this._first;
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    return current;
  }
}
