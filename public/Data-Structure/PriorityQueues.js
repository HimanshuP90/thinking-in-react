/* PriorityQueue: also passesd element with the priority

*/

function PriorityQueue () {
    var collection = [];
    this.printCollection = function() {
      (console.log(collection));
    };
    this.enqueue = function(element){
        if (this.isEmpty()){ 
            collection.push(element);
        } else {
            var added = false;
            for (var i=0; i<collection.length; i++){
                 if (element[1] < collection[i][1]){ //checking priorities
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added){
                collection.push(element);
            }
        }
    };

    this.dequeue = function() {
        var value = collection.shift();
        return value[0];
    };
    this.front = function() {
        return collection[0];
    };
    this.size = function() {
        return collection.length; 
    };
    this.isEmpty = function() {
        return (collection.length === 0); 
    };
}

var pq = new PriorityQueue(); 
pq.enqueue(['Reactjs', 1]); 
pq.enqueue(['jQuery', 3]);
pq.enqueue(['bootstrap', 5]);
pq.enqueue(['JavaScript', 2]);
pq.enqueue(['jQuery', 0]);
pq.printCollection();

/*
arr.splice(): returns the removed items in an array
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

arg1: what positions 
*/