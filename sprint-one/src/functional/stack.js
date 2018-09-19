var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  //storage[size]
  // size = 1
  //storage {

  // Implement the methods below
  someInstance.push = function(value) {
    storage[Object.keys(storage).length] = value; //to assign new values  

  };

  someInstance.pop = function() {
    var poppedValue = storage[Object.keys(storage).length - 1];//to delete at the end 
    delete storage[Object.keys(storage).length - 1];
    return poppedValue;
  };

  someInstance.size = function() {
    return Object.keys(storage).length; 
  };

  return someInstance;
};




