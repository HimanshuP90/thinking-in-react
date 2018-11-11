/*
	Singleton is design pattern wherein you can have only one instance of class or constructor function
*/

var Singleton = (function(){
	var instance;
	
	function createInstance() {
		var object = new Object("I am the instance");
		return object;
	}

	return {
		getInstance: function() {
			if (!instance) {
				instance = createInstance();
			}
			return instance;
		}
	};
})();

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();

console.log(instance2);