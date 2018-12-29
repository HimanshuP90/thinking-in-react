let arr = [1, 2, 3, 2, 1, 2, 2, 2, 3]

const kthMostFrequentNumber = function(arr) {
    let map = {};
    let kthMostOccurence = arr[0];

    for (let index = 0; index < arr.length; index++) {
        if (!map[arr[index]]) {
            map[arr[index]] = 1;
        } else {
            map[arr[index]]++;
            if(map[arr[index]] > map[kthMostOccurence]) {
                kthMostOccurence = map[arr[index]];
            }
        }
    }
    return kthMostOccurence;
}

console.log(kthMostFrequentNumber(arr));