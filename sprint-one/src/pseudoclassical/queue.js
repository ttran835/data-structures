var Queue = function() {
  this.storage = {};
  this.key = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.dequeue = function () {
  if (this.key > 0) {
    var del = this.storage[0];
    this.storage[0] = this.storage[1];
    this.key --;
    return del;
  }
  return this.key; 
}

Queue.prototype.enqueue = function (value) {
  this.storage[this.key] = value;
  this.key++;
}

Queue.prototype.size = function () {
  return this.key;
}