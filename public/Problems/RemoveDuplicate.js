let a=[1,2,4,4,6,5,3,3,7,7,7,9,1];
let map = {};
let removeDuplicate = a.filter(function(data){
    if(typeof map[data] === 'undefined') {
        map[data] = true
    } else {
        return false
    }
})