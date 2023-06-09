class Node {
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  append(value) {
    if (!this.node) {
      this.node = new Node(value, null);
      return;
    }
    if (this.node.nextNode === null) {
      this.node.nextNode = new Node(value, null);
      return;
    }
    if (this.node.nextNode !== null) {
      let lastNode = this.findLast(this.node.nextNode);
      lastNode.nextNode = new Node(value, null);
    }
  }
  findLast(node) {
    if (this.node !== null) {
      if (node.nextNode === null) {
        return node;
      }
      if (node.nextNode !== null && node.nextNode !== undefined) {
        return this.findLast(node.nextNode);
      }
    } else {
      return "List is empty, please append new item ";
    }
  }
  countAll(node, index) {
    if (this.node !== null) {
      if (node.nextNode === null) {
        index++;
        return index;
      }
      if (node.nextNode != null && node.nextNode != undefined) {
        return this.countAll(node.nextNode, (index += 1));
      }
    } else {
      return "List is empty, please append new item ";
    }
  }

  size() {
    if (this.node !== null) {
      return this.countAll(this.node, 0);
    } else {
      return "List is empty, please append new item ";
    }
  }

  prepend(value) {
    if (this.node !== null) {
      let head = this.node;
      let newHead = new Node(value, head);
      this.node = newHead;
      return;
    } else {
      return "List is empty, please append new item ";
    }
  }

  head() {
    if (this.node !== null) {
      return this.node;
    } else {
      return "List is empty, please append new item ";
    }
  }

  tail() {
    if (this.node !== null) {
      return this.findLast(this.node);
    } else {
      return "List is empty, please append new item ";
    }
  }

  at(index, node = this.node) {
    if (this.node !== null) {
      if (index === 0) return node;
      else {
        if (node.nextNode != null) {
          return this.at(index - 1, node.nextNode);
        }
      }
    } else {
      return "List is empty, please append new item ";
    }
  }

  pop() {
    if (this.node !== null) {
      if (this.size() > 1) {
        let newTail = this.at(this.size() - 2);
        let oldTail = newTail.nextNode;
        newTail.nextNode = null;
        return oldTail;
      } else {
        this.node = null;
      }
    } else {
      return "List is empty, please append new item ";
    }
  }

  contains(val, node = this.node) {
    if (this.node !== null) {
      console.log(node.value);
      if (node.value === val) {
        return true;
      } else if (node.nextNode == null) {
        return false;
      }

      return this.contains(val, node.nextNode);
    } else {
      return "List is empty, please append new item ";
    }
  }

  find(val, node = this.node, index = 0) {
    if (this.node !== null) {
      if (node.value === val) {
        console.log(val, "found at index of", index, node);
        return index;
      }
      if (!this.contains(val)) return `${val} not found`;

      return this.find(val, node.nextNode, (index += 1));
    } else {
      return "List is empty, please append new item ";
    }
  }

  toString(node = this.node, string = "") {
    if (this.node !== null) {
      if (node.nextNode === null) {
        return (string += `( ${node.value} ) -> null`);
      }
      return `${this.toString(
        node.nextNode,
        (string += `( ${node.value} ) -> `)
      )}`;
    } else {
      return "List is empty, please append new item ";
    }
  }

  insertAt(index, val, node = this.node) {
    if (this.node !== null) {
      let nodeAtIndex = this.at(index);
      //Check if first node, change logic accordingly
      let nodeBefore = this.at(index - 1);
      nodeBefore.nextNode = new Node(val, nodeAtIndex);
    } else {
      return "List is empty, please append new item ";
    }
  }
  removeAt(index) {
    if (this.node !== null) {
      let nodeToRemove = this.at(index);
      console.log(nodeToRemove);
      let nodeAfter = this.at(index + 1);
      if (index === this.size() - 1) {
        let newLast = this.at(index - 1);
        newLast.nextNode = null;
        return newLast;
      }
      if (index != 0) {
        let nodeBefore = this.at(index - 1);
        nodeBefore.nextNode = nodeAfter;
      } else {
        this.node = nodeAfter;
      }
    } else {
      return "List is empty, please append new item ";
    }
  }
}

let list = new LinkedList();
list.append(1);
list.append(2);
list.prepend(0);

console.log(list.head());
console.log(list.tail());
console.log(list.contains(2));
console.log(list.find(3));

console.log(list.toString());
list.pop();
list.pop();
console.log(list.size());
list.pop();

console.log(list.toString(), list.size());
list.append("new 1");
console.log(list.toString(), list.size());
