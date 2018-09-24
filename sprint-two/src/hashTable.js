

/*
  Hash table is mostly done through array 
  Tuple => [0] position & [1] value; 
  It must be giving the same output for the same input; 
  
  Retreive the bucket; 
    if(!bucket) => create it; 
      insert new tuple; 
  
  iterate over the bucket & if key => update;

  if no !key => insert new tuple; 
*/


var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

/*
We need to recurse through the storage in order to check whether obj exists, but will we need to recurse?
  Need recursion done so I can check for whether or not the item has already been saved. If not, then we would add it. 
  Retreieve would be okay. 
  
  need comfortable setting?

  need to loop through storage [] => bucket [] then tuple [k, v];
    to access: tuple[0] will be string tuple[1] will be value; 

  37 => [, ,[bucket] , , , ,] [ , ,[[tuple]] , , , ,]

  => need to check for the bucket first! 
  the index is set as the actual value; 
  How can I iterate over the actual bucket?
  
  if bucket exists, iterate over the bucket; and ge the value
*/
HashTable.prototype.insert = function(key, val) {
  var index = getIndexBelowMaxForKey(key, this._limit); //this hashes the input; 
  var bucket = this._storage.get(index); //creats bucket @ index.
  var tuple = [key, val];
  if (bucket) {
    bucket.forEach(function(tuple) {
      if (tuple[0] === key) {
        tuple[1] = val; 
        found = true;
      } else {
        bucket.push([key, val]);
      }
    });
  }
  if (!bucket) {
    this._storage.set(index, [tuple]);
  }
};


HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index); //this returns actual value; 
  var val;
  bucket.forEach(function(tuple) {
    if (tuple[0] === key) {
      val = tuple[1];
    }
  });
  return val;
};  

//since it is a storage, most likely will have to use the splice method to remove it. 
/*
  iterate over the bucket;
  find the value, splice the value of tuple;

*/
HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index); 
  //need to iterate over the bucket; 
  bucket.forEach(function(tuple) {
    if (tuple[0] === key) {
      tuple.splice(1, 1);
    }
  });
};


var hash = new HashTable();
hash.insert('hello', 'world');
// hash.insert('hello world'); 





/*
 * Complexity: What is the time complexity of the above functions?
 */


