

/*
  Hash table is mostly done through array 
*/


var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

/*
We need to recurse through the storage in order to check whether obj exists, but will we need to recurse?
  Need recursion done so I can check for whether or not the item has already been saved. If not, then we would add it. 
  Retreieve would be okay. 
  
*/
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage.length; i++) {
    //need to recurse through storage object and check for all of the object arrays; 
    if(!this._storage.includes(index, v)) {
      this._storage.set(index, v); 
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)
};  

//since it is a storage, most likely will have to use the splice method to remove it. 

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage.set(index)
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


