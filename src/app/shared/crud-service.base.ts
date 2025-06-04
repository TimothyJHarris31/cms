import { Subject } from 'rxjs';

export class CrudService<T extends { id: string }> {
  private data: T[] = [];
  public listChangedEvent = new Subject<T[]>();

  constructor(data: T[]) {
    this.data = data;
  }

  list() {
    return this.data;
  }

  get(id: string) {
    return this.data.find((item) => item.id === id);
  }

  create(item: Omit<T, 'id'>) {
    this.data.push({
      ...item,
      id: `${Math.max(...this.data.map((x) => +x.id)) + 1}`,
    } as T);
    this.listChangedEvent.next(this.data);
  }

  update(item: T) {
    const index = this.data.findIndex((x) => x.id === item.id);
    this.data[index] = item;
    this.listChangedEvent.next(this.data);
  }

  delete(id: string) {
    this.data = this.data.filter((item) => item.id !== id);
    this.listChangedEvent.next(this.data);
  }
}
