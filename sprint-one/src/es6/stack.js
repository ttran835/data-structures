class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.key = 0;
  }

  pop() {
    if (this.key > 0) {
      var pop = this.storage[this.key - 1];
      delete this.storage[this.key - 1];
      this.key--; 
      return pop;
    } else {
      return this.key; 
    }
  }

  push (value) {
    this.storage[this.key] = value;
    this.key++; 
  }

  size () {
    return this.key; 
  }

}

