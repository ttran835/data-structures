var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var key = 0; 
  
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[key] = value; 
    key++; 
  };

  someInstance.dequeue = function() {
    // was going to loop, but reassigning is better; 
    // deq is always going to be first iteration; 
    if(key > 0) {
      var del = storage[0];
      delete storage[0]
      storage[0] = storage[1];
      key --;
      return del; 
    } else {
      return key; 
    }
  };

  someInstance.size = function() {
    return key; 
  };

  return someInstance;
};


Queue.enqueue('a');
Queue.enqueue('b');
Queue.dequeue();