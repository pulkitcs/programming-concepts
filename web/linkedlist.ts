interface INode<dataType> {
  prev: INode<dataType> | null;
  next: INode<dataType> | null;
  data: dataType | null;
}

class MyNode<dataType> implements INode<dataType> {
   public prev = null;
   public next = null;

  constructor(public data: dataType) { }
}

interface ILinkedList<dataType> {
  insertInBegining(data: dataType): MyNode<dataType>;
  insertAtEnd(data: dataType): MyNode<dataType>;
  deleteNode(node: MyNode<dataType>): void;
  traverse(): dataType[];
  size(): number;
  search(compare: (data: dataType) => boolean): MyNode<dataType> | null;
}

class LinkedList<dataType> implements ILinkedList<dataType> {
  private head: MyNode<dataType> | null = null;

  insertInBegining(data: dataType) {
    const node = new MyNode(data);
    
    if(!this.head) {
      this.head = node;
    }
    else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }

    return this.head;
  }

  insertAtEnd(data: dataType) {
    const node = new MyNode(data);
    if(!this.head) {
      this.head = node;
      return this.head;
    }
    else {
      const getLast = (n: MyNode<dataType>): MyNode<dataType> => {
        if(!n.next) return n;
        else return getLast(n.next);
      }

      const lastNode = getLast(this.head);
      node.prev = lastNode;
      lastNode.next = node;

      return node;
    }
  }

  deleteNode(node: INode<dataType>) {
    if(!node.prev) {
      this.head = node.next;
    } else {
      node.prev.next = node.next;
    }
  }

  traverse() {

  }

  size() {

  }

  search(compare) {

  }
}

const ll = new LinkedList<number>();
ll.insertInBegining(1);
ll.insertAtEnd(100);
const node = ll.insertAtEnd(200)
console.log(ll);
ll.deleteNode(node);
console.log(ll);
