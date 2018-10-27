function missingNUmber(arr){
    let length = arr.length;
    let total = ((length+1)*(length+2))/2;
    for(let i = 0; i < length; i++){
        total = total-arr[i];
    }
    return total;
}

const result = missingNUmber([1,2,4,5,6]);
console.log(result);