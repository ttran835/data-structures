var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = []; // fix me
  return set;
};

var setPrototype = {
  add: function(item) {
    if (!this.storage.includes(item)) {
      this.storage.push(item);
    } else {
      return 'Item is already in Storage.';
    }
    
  },
  
  contains: function(item) {
    if (this.storage.includes(item)) {
      return true;
    }
    return false;  
  },
  
  remove: function(item) {
    var store = this.storage;
    var index = store.indexOf(item);
    store.splice(index, 1);
    return index;
  }
};

var test = Set();
test.add('hello');
test.add('World');

