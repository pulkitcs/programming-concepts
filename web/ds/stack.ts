interface stackType<dataType> {
  pop(): dataType | undefined;
  peek(): dataType | undefined;
  push(item: dataType): number;
  search(item: dataType): boolean;
  isEmpty(): boolean;
  isFull(): boolean;
  size(): number;
}

class Stack<dataType> implements stackType<dataType> {
  private maxSize;
  private data: dataType[] = [];

  constructor(count: number) {
    this.maxSize = count;
  }

  pop() {
    if(this.data.length === 0) return undefined;
    else 
    return this.data.pop();
  }

  push(item: dataType) {
    return this.data.push(item);
  }

  peek() {
    if(this.data.length === 0) return undefined;
    else return this.data[this.data.length - 1]; 
  }

  search(item: dataType) {
    const size: number = this.data.length;

    if(size === 0) return false;

    for(let i = 0; i < size; i++) {
      if(this.data[i] === item) {
        return true;
      }
    }

    return false;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  isFull() {
    return this.data.length === this.maxSize;
  }

  size() {
    return this.data.length;
  }
}

const newstack = new Stack<number>(5);

newstack.push(10);
newstack.push(12);
newstack.push(897);
newstack.push(54);
newstack.push(14);

console.log("The peek element of the stack is " + newstack.peek());
console.log("Is stack full? " + newstack.isFull());
console.log("The last removed element from the stack is " + newstack.pop());
console.log("The size of the stack is " + newstack.size());
console.log("Is stack empty? " + newstack.isEmpty());
console.log(newstack);

/*
Stack is a linear data structure that follows a particular order in which the elements are inserted and deleted. A stack follows the principle of last in first out(LIFO) which means that the last element inserted into the stack should be removed first. Consider an example of plates stacked over one another in the canteen. The plate which is at the top is the first one to be removed, i.e. the plate which has been placed at the bottommost position remains in the stack for the longest period of time. So, it can be simply seen to follow LIFO(Last In First Out)/FILO(First In Last Out) order. A stack can be implemented using Arrays or Linked Lists.
*/