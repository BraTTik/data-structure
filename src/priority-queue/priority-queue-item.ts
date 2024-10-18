export class PriorityQueueItem<T> {
  constructor(
    public readonly priority: number,
    public readonly item: T,
  ) {}
}
