let myMap = function() {
	this.collection = {};
	this.count = 0;

	this.size = function() {
		return this.count;
	};
	
	this.set = function(key, value) {
		this.collection[key] = value;
		this.count++;
	};

	this.has = function(key) {
		return (key in this.collection);
	};

	this.get = function(key) {
		return (key in this.collection) ?
						this.collection[key] : null;
	};

	this.delete = function(key) {
		if (key in this.collection) {
			delete this.collection[key];
			this.count--;
		}
	};

	this.values = function() {
		let result = new Array();
		for (let key of Object.keys(this.collection)) {
			result.push(this.collection[key]);
		};
		return (result.length > 0) ? result : null;
	};

	this.clear = function() {
		this.collection = {};
		this.count = 0;
	};
}

let m = new myMap();
m.set('Himanshu', 'Software Engineer');
m.set('Sudhanshu', 'Manager');
m.set('Gudiya', 'Teacher');
console.log(m);
console.log(m.get('Himanshu'));
console.log(m.values());


let m2 = new Map();
console.log(m2);
m2.has('hands');
m2.entries();
console.log(m2.has('hands'))
console.log(m2.entries())


------------------------------------------------
var tasks = [
    {
	'name': 'Write your tutor',
	'duration': 120
	},
    {
	'name': 'Work out',
	'duration': 60
	},
    {
	'name': 'Procrastinate',
	'duration': 120
	}
];

var task_names = [];
for(i=0; i<tasks.length;i++){
	task_names.push(tasks[i].name);
}

or

var _names = tasks.map(function(task, index, array){
	return task.name;
});
_________________________________________________


var map = function(array, callback){
	var new_array = [];
	array.forEach(function(element, index, array) {
		new_array.push(callback(element));
	});
	return new_array;
};

var task_names = map(tasks, function(task) {
	return task.name;
});