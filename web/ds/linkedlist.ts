interface INode<dataType> {
  prev: INode<dataType> | null;
  next: INode<dataType> | null;
  data: dataType | null;
}

type Compare<dataType> = (data: dataType) => boolean;
interface ILinkedList<dataType> {
  insertInBegining(data: dataType): INode<dataType>;
  insertAtEnd(data: dataType): INode<dataType>;
  deleteNode(node: MyNode<dataType>): void;
  traverse(): dataType[];
  size(): number;
  search(compare: Compare<dataType>): INode<dataType> | null;
}

class MyNode<dataType> implements INode<dataType> {
  public prev: INode<dataType> | null = null;
  public next: INode<dataType> | null = null

  constructor(public data: dataType) { }
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

  search(compare: Compare<dataType>) {
    const searchNext = (node: INode<dataType>): INode<dataType> | null => {
      const searchResult = compare(node.data!);
      if(searchResult) return node;
      else {
        if(node.next) return searchNext(node.next);
        else return null;
      }
    }


    if(!this.head) return null;
    else return searchNext(this.head);
  }

  traverse(): dataType[] {
    const results: dataType[] = [];

    const getNext = (node: INode<dataType>): dataType[] => {
      if(!node.data) return results;
      else {
        results.push(node.data);
        if(node.next) return getNext(node.next);
        else return results;
      }
    } 

    if(!this.head) return [];
    else return getNext(this.head); 
  }

  size() {
    return this.traverse().length;
  }
}

const ll = new LinkedList<number>();
ll.insertInBegining(1);
ll.insertAtEnd(100);
const node = ll.insertAtEnd(200)
ll.deleteNode(node);
console.log("The result is", ll.search((d:number) => d === 1));
console.log(ll.traverse());
console.log(ll.size());