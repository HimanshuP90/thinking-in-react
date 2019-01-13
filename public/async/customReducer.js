const array1 = [1,2,3,4];

const reducerSum = (acc, elem) => acc + elem;
const reducerEven = (acc, elem) => {
    if (elem %2 === 0) {
        acc.push(elem);
    };
    return acc;
}
console.log(array1.reduce(reducerSum));
console.log(array1.reduce(reducerEven, []));


/**
 * Make your own reduce function for the same functionality
 */

 Array.prototype.myreduce = function(func, result) {
    let i = 0;
    if (arguments.length < 2) {
        i = 1;
        result = this[0];
    }
    for (; i < this.length; i++) {
        result = func(result, this[i], i, this);
    }
    return result;
};

 console.log(array1.myreduce(reducerEven, []));
