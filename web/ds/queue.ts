interface QueueType<dataType> {
  enqueue(item: dataType): number | undefined
  dequeue(): dataType | undefined;
  peek(): dataType | undefined;
  rear(): dataType | undefined;
  isFull(): boolean;
  isEmpty(): boolean;
  get size(): number
}

class Queue<dataType> implements QueueType<dataType> {
  private q: dataType[] = [];
  private limit;
  private count = 0;

  constructor(size: number) {
    this.limit = size;
  }

  enqueue(item: dataType) {
    if (this.count === this.limit) return undefined;

    this.q.unshift(item);
    ++this.count;
    return this.q.length;
  }

  dequeue() {
    if (this.count === 0) return undefined;
    --this.count;
    return this.q.shift();
  }

  peek() {
    return this.q[this.count]
  }

  rear() {
    return this.q[0];
  }

  isFull() {
    return this.limit == this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  get size() {
    return this.count;
  }

  display() {
    console.log(this.q);
  }

}

const q = new Queue<number>(10);
q.enqueue(1);
q.enqueue(8);
q.enqueue(3);
q.enqueue(6);
q.enqueue(2);
 
// Queue becomes 1, 8, 3, 6, 2
 
console.log(q.size);
q.display()

