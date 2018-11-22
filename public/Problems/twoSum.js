const arr = [7, 0, -4, 5, 2, 3];
// twoSum(arr, 5); // [[0, 5], [2, 3]]

//Brute Force o(n*2)

// const twoSum = (arr, target) => {
//     let results = [];
//     for(let i = 0; i<arr.length; i++){
//         for(let j= i+1; j<arr.length; j++){
//             if(arr[j]==target-arr[i]){
//                 results.push(arr[i], arr[j])
//             }
//         }
//     }
//     return results;
// }



//O(n)

const twoSum = (arr, target) => {
    let map = {},
        results = [];
    for(let i = 0; i< arr.length;i++){
        if(map[arr[i]] != undefined){
            results.push(map[arr[i]], arr[i])
        } else {
            map[target-arr[i]] = arr[i]
        }
    }
    return results
}
console.log(twoSum(arr, 5))

// ['10','10','10','10','10'].map(parseInt);
['10','10','10','10','10'].map(Number);

const ip = '192.168.1.1';
const ipArray = ip.split('.').map(parseInt);
