/* 
LinkedList: Linked list is a linear data structure also linked list elements are not stored at contiguous
            location
           1) Dynamic Size
           2) Ease of insertion/deletion
           3) Random access is not allowed

Array: Arrays can be used to store linear data of similar types but also arrays have following limitations
        1) The size of arrays is fixed
        2) Inserting new element in array is expensive, Deletion is also expensive

Node = element + reference of next node


*/


function LinnkedList() {
  let length = 0;
  let head = null;
  const Node = function(element) {
    this.element = element;
    this.next = null;
  }

  this.add = function(element) {
    
  }

}


function LinkedList() {
  var length = 0; 
  var head = null; 

  var Node = function(element) {
    this.element = element; 
    this.next = null;
  }; 

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element) {
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
        var currentNode = head;
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }
    length++;
  }; 

  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
        head = currentNode.next;
    } else {
      while(currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length --;
  };
  
  this.isEmpty = function() {
    return length === 0;
  };

  this.indexOf = function(element) {
    var currentNode = head;
    var index = -1;

    while(currentNode){
        index++;
        if(currentNode.element === element){
            return index;
        }
        currentNode = currentNode.next;
    }
    return -1;
  };

  this.elementAt = function(index) {
    var currentNode = head;
    var count = 0;
    while (count < index) {
      count ++;
      currentNode = currentNode.next
    }
    return currentNode.element;
  };
  
  this.addAt = function(index, element){
    var node = new Node(element);

    var currentNode = head;
    var previousNode;
    var currentIndex = 0;

    if(index > length){
        return false;
    }

    if(index === 0){
        node.next = currentNode;
        head = node;
    } else {
        while(currentIndex < index){
            currentIndex++;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        node.next = currentNode;
        previousNode.next = node;
    }
    length++;
  }
  
  this.removeAt = function(index) {
    var currentNode = head;
    var previousNode;
    var currentIndex = 0;
    if (index < 0 || index >= length){
        return null
    }
    if(index === 0){
        head = currentNode.next;
    } else {
        while(currentIndex < index) {
            currentIndex ++;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next
    }
    length--;
    return currentNode.element;
  }

  this.deleteNode = function(element) {
    var currentNode = head;
    if (currentNode.next != null) {
      currentNode.element = currentNode.next.element;
      currentNode.next = currentNode.next.next;
    } else {
      delete(currentNode);
    }
  }

  this.displayList = function() {
    var currentNode = head;
    while(currentNode!= null) {
      console.log(currentNode.element);
      currentNode = currentNode.next;
    }
  }
//Given a non-empty, singly linked list with head node head,
//return a middle node of linked list.


  this.middleList = function() {
    let currentNode = head;
    let slowPtr = head;
    let fastPtr = head;
    if (currentNode != null) {
      while(fastPtr != null && fastPtr.next != null) {
        fastPtr = fastPtr.next.next;
        slowPtr = slowPtr.next;
      }
      if (slowPtr == fastPtr) {
        console.log("Loop found");
      }
      console.log("The middle element is: ", slowPtr.element);
    }
  }

  this.nthNodefromLastMethod1 = function(index) {
    let len = 0, i;
    let currentNode = head;
    while(currentNode){
      currentNode = currentNode.next;
      len++;
    }

    if (len < index) {
      return;
    }

    currentNode = head;
    for (let i = 0; i < len-index; i++){
      currentNode = currentNode.next;
    }
    console.log(`${index}th element from last in list: `, currentNode.element);
  }

  this.nthNodefromLastMethod2 = function(index) {
    let mainPtr = head;
    let refPtr = head;
    let count = 0;
    if (head != null) {
      while(count < index){
        if (refPtr == null) {
          console.log("Index doesn't exits");
          return;
        }
        refPtr = refPtr.next;
        count++;
      }
      while(refPtr != null) {
        refPtr = refPtr.next;
        mainPtr = mainPtr.next;
      }
      console.log(`Node no. ${index} from last: `, mainPtr.element);
    }
  }

  this.reverseList = function(){
    let prev = null;
    let current = head;
    let next = null;
    while(current != null){
      next = current.next; /* Before changing next of current store next node */
      current.next = prev; /* actual reversing happens */
      prev = current; /* move prev and current one step forward */
      current = next;
    }
    head = prev;
  } 

  this.detectLoop = function() {
    head.next.next.next.next.next.next.next.next = head;
    let fastPtr = head;
    let slowPtr = head;
    while(slowPtr && fastPtr && fastPtr.next) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;
      if (slowPtr == fastPtr) {
        console.log("\n Bingo :-) Loop found ..!! \n ");
        return;
      }
    }
  }
} 

var conga = new LinkedList();
conga.add('Reactjs');
conga.add('Redux');
conga.add('Nodejs');
conga.add('Expressjs');
conga.add('HTML');
conga.add('CSS');
conga.add('MongoDB');
conga.add('PSQL');

// console.log("--------------Before reverseList----------------");
conga.displayList();
// conga.reverseList();
// console.log("--------------After reverseList-----------------");
// conga.displayList();
// conga.middleList();
conga.detectLoop();
// conga.nthNodefromLastMethod2(9);
// console.log(conga.removeAt(3));
// console.log(conga.elementAt(3));
// console.log(conga.indexOf('Puppy'));
// console.log(conga.size());
// console.log(conga.deleteNode('Kitten'));
// console.log(conga.elementAt(0));

/*
Linkedlist vs Array
1) Inserting a new elements in an array of elements is expensive, because room has to be created.
2) Size of array is fixed.


*/