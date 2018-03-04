/* Stack */
//functions: push, pop, peek, length

var letters = [];
var word = "nitin";
var rword = "";

for (var i = 0; i <word.length; i++) {
  letters.push(word[i]);
}

for (var i = 0; i <word.length; i++) {
  rword += letters.pop();
}

if (rword == word) {
  console.log(`"${word}" is palindrom...!`);
} else {
  console.log(`${word} is not palindrom...!`);
}


//Create a stack
var stack = function() {
  this.count = 0;
  this.storage = {};

  //Add a value onto the end of the stack
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  //Removes and returns the value at the end of the stack
  this.pop = function() {
    if(this.count === 0) {
      return undefined;
    }

    this.count--;
    var results = this.storage[this.count];
    delete this.storage[this.count];
    return results;
  }

  this.size = function() {
    return this.count;
  }

  //returns the value at the end of the stack
  this.peek = function(value) {
    return this.storage[this.count-1];
  }
}

var myStack = new stack();
console.log(myStack)

myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.push(40);
myStack.push(50);


console.log(myStack.size());































