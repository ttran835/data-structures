/*
  Approach: 
    turning it into psuedoclassical ? Or should I keep it this way? 
      or do I want to use prototypal? Would this be good as well? 
      Switching the information into something else will definitely help. 
   //method, takes a value and adds it to the end of the list
    //Would you just push the information into list.tail? 
      //So then I need to provide a method where adding value to the list.tail. 
        //because this is a method, we can reference it by using this.tail = value? 
    This uses the functional shared method; 

    example List:
      LinkList = {
        head: {
          value: 5
          next: {
            value: 22
            next:{
              value:25
              next: null <= this is where it ends; 
            }
          }
        }
      }

      Function add to tail would => 
        linkList = {
          head: {
            value: 4,
            next : null; 
          }
        }
      if(this.head) {
        need to assign this.head = this.tail; 
        then we need to assign the this.head.next = addToTail(value)
           
      }
*/



var LinkedList = function() {
  var list = { 
    addToTail: function(value) {
      if (this.tail) { //if tail exists
        this.tail.next = Node(value); //if tail exists, then we add to the tail.  
        this.tail = this.tail.next;

        //set this.head to equal this.tail  //then call Node again to create another object; 
      } else { 
        this.tail = Node(value); //create new Node Obj;
        this.head = this.tail; // this makes the head equal to the tail @ the beginning; 
      }
    },

    removeHead: function() {  
      if (this.head === null & this.tail === null) {
        return undefined;
      } else {
        var node = this.head.value;
        this.head = this.tail; 
        return node;

        //need to set Node next value = node.next; 
        //then this.head = null; 
      }
       
      //method, removes the first node from the list and returns its value
    },

    contains: function(target) {
      var node = this.head;
      while (node) {
        if (node.value === target) {
          return true;
        } else {
          node = node.next;
        }
        
      //method, returns boolean reflecting whether or not the passed-in value is in the linked list
      }
      return false;
    }
    
  };

  list.head = null;
  list.tail = null;
  return list;
};

//the methods need to pass the information over to Node;
var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

// console.log(test.head.value);

/*
 * Complexity: What is the time complexity of the above functions?
 *  n(o) since it is linear; 
 */

