// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    return this.insertAt(data, 0);
  }

  insertLast(data) {
    return this.insertAt(data, this.size())
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const prevNode = this.getAt(index - 1) || this.getLast();

    prevNode.next = new Node(data, prevNode.next);
  }

  size() {
    let counter = 0;
    let currentNode = this.head;

    while (currentNode) {
      currentNode = currentNode.next;
      counter++;
    }

    return counter;
  }

  getFirst() {
    return this.getAt(0);
  }

  getLast() {
    return this.getAt(this.size() - 1);
  }

  getAt(index) {
    let currentNodeIndex = 0;
    let currentNode = this.head;

    while (currentNode && index !== currentNodeIndex) {
      currentNodeIndex++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  clear() {
    delete this.head;
  }

  removeFirst() {
    return this.removeAt(0);
  }

  removeLast() {
    return this.removeAt(this.size() - 1);
  }

  removeAt(index) {
    if (!this.head) return;

    if (index === 0) {
      this.head = this.head.next;
      return;
    };

    const prevNode = this.getAt(index - 1);
    const nextNode = prevNode.next?.next;

    if (!prevNode) return;
    prevNode.next = nextNode;
  }

  forEach(callback) {
    let index = 0;
    let node = this.head;

    while (node) {
      callback(node, index);
      node = node.next;
      index++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;

    while (node) {
      yield node;

      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
