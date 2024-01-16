interface INode<dataType> {
  data: dataType;
  //prev?:dataType | undefined;
  left: INode<dataType> | undefined;
  right: INode<dataType> | undefined
}

interface IBinarySearchTree<dataType> {
  insert(data: dataType): INode<dataType> | undefined;
  delete(data: dataType): INode<dataType> | undefined;
  // inorder(node: INode<dataType> |  undefined): void;
  // preorder(node: INode<dataType> |  undefined): void;
  // postorder(node: INode<dataType> |  undefined): void;
  search(data: dataType): searchResult<dataType> 
}

type comparator<dataType> = (a: dataType, b: dataType) => boolean;

type searchResult<dataType> = {
  prev: INode<dataType> | undefined;
  node: INode<dataType> | undefined;
}

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

  search(value: dataType): searchResult<dataType> {
    const searchNode = (node: INode<dataType>, prev: INode<dataType> | undefined = undefined): searchResult<dataType> => {
      const { left, right, data: nodeValue } = node;
      const shouldAddtoLeft = this.compare(value, nodeValue);

      if(nodeValue === value) return ({node, prev});
      else if ( shouldAddtoLeft && left) return searchNode(left, node);
      else if (!shouldAddtoLeft && right) return searchNode(right, node);
      else if (!left && !right) return ({prev: undefined, node: undefined});

      return ({prev: undefined, node: undefined});
    } 

    if(this?.root) return searchNode(this.root, undefined);
    else return ({prev: undefined, node: undefined});
  }

  delete(value: dataType): INode<dataType> | undefined {
    const {prev, node} = this.search(value);

    if(!node) return undefined;
    else if(!prev) return this.root = undefined;

    if(!node.left && !node.right) {
      const deleteParentFromLeft = this.compare(value, prev.data); 

      if(deleteParentFromLeft && prev.left) {
        delete prev.left
      }
      else if (!deleteParentFromLeft && prev.right){
        delete prev.right;
      }
    }

    return node;
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

console.log("Search result", bst.search(13));
console.log("deleted node", bst.delete(13));

console.log(bst);