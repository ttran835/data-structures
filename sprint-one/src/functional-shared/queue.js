var extend = function (obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
};



var Queue = function() {
  var instance = {};
  instance.storage = {};
  instance.key = 0;
  extend(instance, queueMethods);
  return instance; 
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[this.key] = value;
    this.key++;
    //what should you do here, you are just adding it to the first of Q;
  },

  dequeue: function () {
    if(this.key > 0) {
      var del = this.storage[0];
      this.storage[0] = this.storage[1];
      this.key--;
      return del;
    }
    //will replace the first in Q with the next in Q; 
  },

  size: function () {
    return this.key;
  }
};


