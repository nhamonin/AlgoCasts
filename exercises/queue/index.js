// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// 1. Simple - Get methods from Array
// class Queue {}
// Queue.prototype.add = Array.prototype.unshift;
// Queue.prototype.remove = Array.prototype.pop;

// 2. Implement by my own
class Queue {
  constructor() {
    this.store = [];
  }

  add(record) {
    this.store.unshift(record);
  }

  remove() {
    return this.store.pop();
  }
}

module.exports = Queue;
