/*
 Approach is very similar to regular tree,
    just need to split the value into left and right 
    left: small
    right: big; 
    
    Need to do functional Class and pass it through as a new obj;
    Since it is a node, I should create a new Node on the outside and pass the function thru

	//the tree is an array that contains other arrays when you pass it in. 
		this means the node.left needs to be added. 
		probably will need to set prototypal; 
	
		Do I need to create the main tree & then split them up? 
			That means I need to set the main tree 
*/


var BinarySearchTree = function(value) {
  this.value = value; 
  this.left;
  this.right; 
};

/*
	// A .insert() method, which accepts a value and places it in the tree in the correct position.
		//if the left value exists already, then you will create another obj but check
			//if value < left then assign left, else assign right. 
	while this.value exists, 
		we need to check if value(5) > || < value; 
			if 5 > value => left assignment
				else = you assign value to the value; 
			if 5 < value => right assignment;
				else = you assign value to value; 
*/		
BinarySearchTree.prototype.insert = function (value) {
  if (this.value > value && this.left) {
    this.left.insert(value); 
  } else if (this.value < value && this.right) {
    this.right.insert(value);
  }

  if (this.value > value && !this.left) {
    this.left = new BinarySearchTree(value);
  } else if (this.value < value && !this.right) {
    this.right = new BinarySearchTree(value);
  }
};

// A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
/*
	since we only need to check left and right; 
		there is not iteration needed... Will just need to go down the tree; 
		if value is bigger than this.value => go down left tree; 
		if value is smaller than this.value => go down right tree; 
		
		I definitely want to recurse through the tree itself in order to find the correct value; 

*/
BinarySearchTree.prototype.contains = function (target) {
  var wasFound = false;

  var recurse = function (obj) {
    if (obj) {
      if (obj.value === target) {
        wasFound = true;
      } 

      if (obj.value > target) {
        recurse(obj.left);
      } else if (obj.value < target) {
        recurse(obj.right);
      }
    }	 
  };
  recurse(this);
  return wasFound; 
  // return false;
};

// A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
//this needs to run a cb function on every single value inside the tree; 
BinarySearchTree.prototype.depthFirstLog = function (cb) {

  var recurse = function (obj) {
    if (obj) {
      cb(obj.value);
    }
    if (obj.left && obj.left.value < obj.value) {
      recurse(obj.left);
    } 
    if (obj.right && obj.right.value > obj.value) {
      recurse(obj.right);
    }
  };
  recurse(this);
};


var binarySearchTree = new BinarySearchTree(5);
binarySearchTree.insert(2);
binarySearchTree.insert(3);
binarySearchTree.insert(7);
binarySearchTree.insert(6);
binarySearchTree.contains(6);


/*
 * Complexity: What is the time complexity of the above functions?
 */

