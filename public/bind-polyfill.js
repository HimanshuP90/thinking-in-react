Function.prototype.polyfillBind = function(oThis) {
    if (typeof this !== 'function') {
    throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs   = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
        return fToBind.apply(this instanceof fNOP
                ? this
                : oThis,
                aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    if (this.prototype) {
        fNOP.prototype = this.prototype; 
    }
    fBound.prototype = new fNOP();

    return fBound;
};

// const bind = (fn, context) => (...args) => fn.apply(context, args)

var mathLib = {
	pi: 3.14,
	area: function(r) {
		return this.pi * r * r;
	},
	circumference: function(r) {
		return 2 * this.pi * r;
	}
};

var newContext = mathLib.circumference.polyfillBind({pi: 5})
console.log(newContext(3))