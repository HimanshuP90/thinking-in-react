let name = {
    firstname: 'Himanshu Kumar',
    lastname: 'Pandey',
}

let fullname = function(hometown, state) {
    console.log(this.firstname + " " + this.lastname + " from " + hometown + "," + state);
};

//  invoked function directly by passing the reference 
fullname.call(name, "Basti", " Uttar Pradesh")

let name2 = {
    firstname: 'Sachin',
    lastname: 'Tendulkar',
}

// Function borrowing
fullname.call(name2, "Mumbai", " Maharastra")
fullname.apply(name2, ["Mumbai", " Maharastra"])

// bind method
// it gives the copy of method but which can be invoked letter
let printMyName = fullname.bind(name2, "Mumbai", " Maharastra");
console.log(printMyName)
printMyName();