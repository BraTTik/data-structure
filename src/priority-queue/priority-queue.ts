import { PriorityQueueItem } from "./priority-queue-item";
import { IQueue } from "./interface";

export class PriorityQueue<T> implements IQueue<T> {
  protected queue: Array<PriorityQueueItem<T>> = [];
  protected maxSize: number | null = null;

  constructor(maxSize?: number) {
    if (maxSize) {
      this.maxSize = maxSize;
    }
  }

  push(item: T, priority: number) {
    if (this.isFull()) {
      throw new Error("Queue is full");
    }

    for (let i = this.queue.length - 1; i >= -1; i--) {
      const qItem = this.queue[i];
      if (priority >= qItem?.priority) {
        this.queue[i + 1] = qItem;
        continue;
      }
      this.queue[i + 1] = new PriorityQueueItem(priority, item);
      break;
    }
  }

  pop(): T | null {
    const item = this.queue.pop();

    return item?.item ?? null;
  }

  peek(): T | null {
    return this.queue.at(-1)?.item ?? null;
  }

  isFull() {
    return this.maxSize !== null && this.queue.length >= this.maxSize;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size(): number {
    return this.queue.length;
  }
}
