let name = {
    firstname: 'Himanshu',
    lastname: 'Pandey'
};

const fullName = function(message1, message2){
    console.log(this.firstname + " " + this.lastname + " " + message1 + " " + message2)
}

fullName.call(name, 'Its time for tea')

Function.prototype.mycall = function(...args) {
    let obj = this
    console.log(args[0].firstname, args[0].lastname, args[1])
}

fullName.mycall(name, 'Its time for tea')

Function.prototype.myapply = function(...args) {
    console.log(args[0].firstname, args[0].lastname, args[1][0])
}

fullName.myapply(name, ['Its time for tea', 'Ok I am ready for tea'])