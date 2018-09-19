var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.key = 0;
  return obj;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {
  pop: function () {
    if (this.key > 0) {
      var del = this.storage[this.key - 1];
      delete this.storage[this.key - 1];
      this.key--;
      return del;
    } else {
      return this.key;
    }
  }, 

  push: function(value) {
    this.storage[this.key] = value;
    this.key++;
  },

  size: function () {
    return this.key; 
  }
};

