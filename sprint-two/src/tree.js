/*
  Implementation = 

  tree = {
    value: 5
    children: [{value:1},[{value:2}]]
  }


  Visual: 
    Tree: 
    Traverse through the tree through an array; 


*/
var extend = function (obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
};


var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = [];
  newTree.children = [];
  extend(newTree,treeMethods);

  return newTree;
};



/*
  What needed to be done. 
  Set value to newTree.value; 
  after, set value to children if this.children exists, then just add to the next;
  Might need to loop through the array to check if the children has another children;  
*/
var treeMethods = {
  addChild: function(value) {
    // if(!this.value) {
    //   //set the parent to have property;
    //   this.value = value;
    // } else {
      this.children.push(new Tree(value));
    // }
    //property, an array containing a number of subtrees
  },
/*
  Most likely will need to solve this problem recursively... 
    need to reach the target;
    create conditional statement to say that if value === target; true
      iterate through first child array first...
        if this.children[i].value === target; true;
        if not, then we need to recursively go thru it.  

*/
  contains: function(target) {
    var wasFound = false;
    var results = function (obj) {
      for (var i = 0; i < obj.children.length; i++) {
        if (obj.children[i].value === target) {
          wasFound = true; 
        }
      }
      obj.children.forEach(function(value) {
        results(value);
      });
    };
      results(this);
      return wasFound;
    }
    
};



/*
 * O(n);
 */
