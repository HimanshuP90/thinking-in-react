/* function foo() {
	console.log(this.a);
}

var obj =  {
	a: 2
};

foo.call(obj); */


/* function foo(something) {
	console.log(this.a, something);
	return this.a + something;
}

var obj = {
	a: 2
};

function bind(fn, obj) {
	return function() {
		return fn.apply(obj, arguments);
	};
}

var bar = bind(foo, obj)

var b = bar(3);
console.log(b); */


function foo(something) {
	console.log(this.a, something);
	return this.a + something;
}

var obj = {
	a: 2
};


var bar = foo.bind(obj)

var b = bar(3);
console.log(b);