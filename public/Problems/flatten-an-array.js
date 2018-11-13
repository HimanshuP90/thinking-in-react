
const flattenArray = (arr) => {
    let flatArr = [];
    for(var i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            for(var j = 0; j < arr[i].length; j++){
                flatArr.push(arr[i][j]);
            }
        } else {
            flatArr.push(arr[i]);
        }
    }
    return flatArr;
}

console.log(flattenArray([1,2,3, [4,5], 6, [7,8], 9]));
