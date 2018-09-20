class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.key = 0;

  }

  dequeue() {
    if (this.key > 0) {
      var del = this.storage[0];
      this.storage[0] = this.storage[1];
      this.key--;
      return del;
    } else {
      return this.key; 
    }
  }

  enqueue (value) { 
    this.storage[this.key] = value;
    this.key++;
  }

  size () {
    return this.key; 
  }

}


var test = new Queue();
