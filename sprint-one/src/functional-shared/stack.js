
var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.key = 0; 
  extend(someInstance, stackMethods);
  return someInstance; 
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var extend = function (obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
};

var stackMethods = {

  push: function (value) {
    this.storage[this.key] = value;
    this.key++;
  },

  pop: function () {
    if (this.key > 0) {
      var popped = this.storage[this.key - 1];
      delete this.storage[this.key - 1];
      this.key--;
      return popped;
    } else {
      return this.key; 
    }
  },

  size: function () {
    return this.key; //expect this to refer to the obj1 
  }
};

