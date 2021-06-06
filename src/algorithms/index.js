//NOTE: Currently can only add to heap, but not remove (not implemented until I'm sure insertion has no errors).
class Node {
  constructor(name, priority) {
    //Array to hold nodes adjacent to this node.
    let adj = [];
    this.getName = () => name;
    this.getPriority = () => priority;
    //addAdjNode(node: Node): Node
    this.addAdjNode = function(node) {
      adj.push(node);
      return this;
    }
    //getAdj(): Node[]
    this.getAdj = function() { return adj; }
  }
}

class MinHeap {
  constructor() {
    //heap: Node[]
    let heap = [];
    //Returns heap - for debugging.
    this.getHeap = () => heap;
    //getLeftChild(index: number): number
    this.getLeftChild = function(index) {
      return 2 * index + 1;
    }
    //getRightChild(index: number): number
    this.getRightChild = function(index) {
      return 2 * index + 2;
    }
    //getParent(index: number): number
    this.getParent = function(index) {
      return Math.floor((index - 1) / 2);
    }
    //Returns the size of the heap at the current time.
    this.size = function() { return heap.length; }
    //Insert a new node into the heap.
    //insert(name: string, priority: number): MinHeap
    this.insert = function(name, priority) {
      heap.push(new Node(name, priority));
      this.bubbleUp(this.size() - 1);
      return this;
    }
    //Swaps elements at index1 and index2 of heap.
    //swap(index1: number, index2: number): void
    this.swap = function(index1, index2) {
      let elem1 = heap[index1];
      let elem2 = heap[index2];
      heap[index1] = elem2;
      heap[index2] = elem1;
    }
    //Helper method for inserting into heap.
    //bubbleUp(index: number): void
    this.bubbleUp = function(index) {
      while(index > 0) {
        let parentIndex = this.getParent(index);
        let childPriority = heap[index].getPriority();
        let parentPriority = heap[parentIndex].getPriority();

        if (childPriority >= parentPriority) {
          //Heap is valid - stop bubbleUp.
          return;
        }
        else {
          //Heap is invalid - swap and set current index to parent index.
          this.swap(index, parentIndex);
          index = parentIndex;
        }
      }
    }
  }
}

let h = new MinHeap();
h.insert("", 2).insert("", 1).insert("", 3).insert("", 0);
for(let i = 0; i < 4; ++i) {
  console.log(h.getHeap()[i].getPriority());
}