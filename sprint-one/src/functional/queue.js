var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[Object.keys(storage).length] = value; 
  };

  someInstance.dequeue = function() {
    var dequeued = storage[Object.keys(storage)]
    delete storage[Object.keys(storage)]; 
    return dequeued;
  };

  someInstance.size = function() {
    return Object.keys(storage).length; 
  };

  return someInstance;
};
