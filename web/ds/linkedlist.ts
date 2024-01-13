interface INode<dataType> {
  prev: INode<dataType> | null;
  next: INode<dataType> | null;
  data: dataType | null;
}

class MyNode<dataType> implements INode<dataType> {
  public prev: INode<dataType> | null = null;
  public next: INode<dataType> | null = null

  constructor(public data: dataType) { }
}

interface ILinkedList<dataType> {
  insertInBegining(data: dataType): INode<dataType>;
  insertAtEnd(data: dataType): INode<dataType>;
  //deleteNode(node: MyNode<dataType>): void;
  //traverse(): dataType[];
  //size(): number;
  //search(compare: (data: dataType) => boolean): MyNode<dataType> | null;
}

class LinkedList<dataType> implements ILinkedList<dataType> {
  private head: INode<dataType> | null = null;

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
      const getLast = (n: INode<dataType>): INode<dataType> => {
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

  // traverse() {

  // }

  // size() {

  // }

  // search(compare) {

  // }
}

const ll = new LinkedList<number>();
ll.insertInBegining(1);
ll.insertAtEnd(100);
const node = ll.insertAtEnd(200)
console.log(ll);
ll.deleteNode(node);
console.log(ll);
//console.log(ll.search((d:number) => d === 100));