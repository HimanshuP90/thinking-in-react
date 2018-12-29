function mySet() {
    var collection = [];
    this.has = function(element) {
        return (collection.indexOf(element) !== -1)
    }

    this.values = function() {
        return collection;
    }

    // add 
    this.add = function(element) {
        if (!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    }

    // remove element from the collection
    this.remove = function(element) {
        if (this.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    }

    this.size = function() {
        return collection.length;
    }

    // union of two sets
    this.union = function(otherSet) {
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    }

    // intersection of two sets
    this.intersection = function(otherSet) {
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    }

    // subset
    this.subset = function(otherSet) {
        var firstSet = this.values();
        return firstSet.every(function(value){
            return otherSet.has(value)
        })
    }

}

var setA = new mySet();
var setB = new mySet();
setA.add("a")
setA.add("b")
setA.add("c")
setB.add("a")
setB.add("d")
setB.add("e")
setB.add("f")
document.write('Union of setA and setB = ', setA.union(setB).values(), `<br>`) 
document.write('Intersection of setA and setB = ', setA.intersection(setB).values())