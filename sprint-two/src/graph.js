
/*
  Result: It will return node obj w
    value: value, edge: [], and node.length;
  Adding a new Node should create a new node; 
  Meaning we should set another variable to create new Node...
    Or should I just pass it back into graph itself?; Let's try graph as well; 
  addEdge: 
    adding edge is referring to ensuring a Node has access to another Node
      
*/

var each = function (collection, callback) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  } else {
    for (var key in collection) {
      callback(collection[key], key, collection);
    }
  }
};
// Instantiate a new graph
var Node = function (value) {
  var node = {};
  node.value = value;
  node.edge = [];
  node.length = 0; 
  return node;
};

var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
// Should add a new node, so I shuld just create a new function; 
Graph.prototype.addNode = function(value) { 
  if (!this.storage[value]) { 
    this.storage[value] = Node(value);
  } else {
    return 'This Node Exists'; 
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
//it needs to loop through and check storage[i].value; 
Graph.prototype.contains = function(node) {
  if (this.storage[node]) {
    return true;
  }
  return false; 
};

// Removes a node from the graph.
//have to go through each key & edge array to check 
//for(var key in this.storage) {
//iterate through the array;
 
Graph.prototype.removeNode = function(node) {
  var delNode = this.storage[node];
  delete this.storage[node];
  each(this.storage, function(key) {
    if (key.edge.includes(node)) {
      var index = key.edge.indexOf(node);
      key.edge.splice(index, 1);
    }
  });
  return delNode;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var current = this.storage[fromNode].edge; //I also need to loop thru it as well. 
  if (current.includes(toNode)) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
/*
  That means, I need to push the number onto themselves because they are now connected; 
*/
Graph.prototype.addEdge = function(fromNode, toNode) {
  //case for ifHas = if node already has it, then return something else; 
  //if not, then you would push the edge into eachother. 
  // [fromNode] & [toNode]; need to refer to storage[value].edge.push(storage); 
  //just need to do the opposite; 
  var current = this.storage[fromNode].edge;
  if (current.includes(toNode)) {
    return 'They are linked already';
  } else {
    this.storage[fromNode].edge.push(toNode); 
    this.storage[toNode].edge.push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
//Need to splice(index, 1)
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var current = this.storage[fromNode].edge;
  var to = this.storage[toNode].edge;
  var currentIndex = current.indexOf(toNode);
  var toIndex = current.indexOf(fromNode);

  current.splice(currentIndex, 1); 
  to.splice(toIndex, 1);
};

// Pass in a callback which will be executed on each node of the graph.
//forEachNode = applies whatever function is passed into and return the results; 
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(this.storage[key].value);
  }
};




var test = new Graph(); 
test.addNode(2);
test.addNode(1);
test.addNode(3);
test.addNode(5);
test.addEdge(3, 2);
test.addEdge(3, 5);
test.hasEdge(3, 5);
test.removeEdge(3, 5); 
test.addNode(4);
test.addNode(5);
test.addEdge(5, 4);
test.hasEdge(4, 5);
test.removeNode(5);
test.hasEdge(4, 5);
// console.log(test.contains(1));
// console.log(test);
/*
 * Complexity: What is the time complexity of the above functions?
 */


