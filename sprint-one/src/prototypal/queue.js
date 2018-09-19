var Queue = function() {
  var obj = Object.create(queueMethods)
  obj.storage = {};
  obj.key = 0;
  return obj;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[this.key] = value;
    this.key++;
  }, 

  dequeue: function() {
    if (this.key > 0) {
      var del = this.storage[0]
      this.storage[0] = this.storage[1];
      this.key--;
      return del; 
    }
  },

  size: function () {
    return this.key; 
  }
};


