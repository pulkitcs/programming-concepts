interface INode<dataType> {
  data: dataType;
  left: INode<dataType> | undefined;
  right: INode<dataType> | undefined
}

interface IBinarySearchTree<dataType> {
  insert(data: dataType): INode<dataType> | undefined;
  //delete(data: dataType): INode<dataType> | null;
  // inorder(node: INode<dataType> |  undefined): void;
  // preorder(node: INode<dataType> |  undefined): void;
  // postorder(node: INode<dataType> |  undefined): void;
  search(data: dataType): INode<dataType> | undefined
}

type comparator<dataType> = (a: dataType, b: dataType) => boolean;

class Nodes<dataType> implements INode<dataType> {
  left = undefined;
  right = undefined;

  constructor(public data: dataType) {}
}

class BinarySearchTree<dataType> implements IBinarySearchTree<dataType> {
  private compare: comparator<dataType>;
  root?: INode<dataType>;

  constructor(compare: comparator<dataType>) {
    this.compare = compare;
  }

  insert(dataToBeAdded: dataType) {

    if(!this.root) {
      const node = new Nodes<dataType>(dataToBeAdded);
      this.root = node;

      return this.root;
    }

    const insertNode = (node: INode<dataType>): INode<dataType> => {
      const { left, right, data: nodeData }: INode<dataType> = node;

        const shouldAddtoLeft = this.compare(dataToBeAdded, nodeData);

        if(!left && shouldAddtoLeft) {
          node.left = new Nodes<dataType>(dataToBeAdded);
          return node;
          
        }
        else if(!right && !shouldAddtoLeft) {
          node.right = new Nodes<dataType>(dataToBeAdded);
          return node;

        } else if(left && shouldAddtoLeft) {
          return insertNode(left)

        } else if(right && !shouldAddtoLeft) {
          return insertNode(right);

        }

        return node;
    }

    const node: INode<dataType> = insertNode(this.root)

    return node;
  }

  search(value: dataType): INode<dataType> | undefined {
    const searchNode = (node: INode<dataType>): INode<dataType> | undefined => {
      const { left, right, data: nodeValue } = node;
      const shouldAddtoLeft = this.compare(value, nodeValue);

      if(nodeValue === value) return node;
      else if ( shouldAddtoLeft && left) return searchNode(left);
      else if (!shouldAddtoLeft && right) return searchNode(right);
      else if (!left && !right) return undefined;
    } 

    if(this?.root) return searchNode(this.root);
    else return undefined;
  }
}

const compare: comparator<number> = (dataToBeAdded,  nodeData) => dataToBeAdded < nodeData;

const bst = new BinarySearchTree<number>(compare);
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(4);
bst.insert(7);
bst.insert(14);
bst.insert(13);

console.log(bst);

console.log("Search result", bst.search(1));