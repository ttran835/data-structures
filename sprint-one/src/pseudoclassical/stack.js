var Stack = function() {
  this.storage = {};
  this.key = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};


//split up to 3 different prototype methods;

Stack.prototype.pop = function () {
  if (this.key > 0) {
    var del = this.storage[this.key - 1];
    delete this.storage[this.key - 1];
    this.key--;
    return del;
  } else {
    return this.key; 
  }
};

Stack.prototype.push = function (value) {
  this.storage[this.key] = value;
  this.key++;
};

Stack.prototype.size = function () {
  return this.key;
};

