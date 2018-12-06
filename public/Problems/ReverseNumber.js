/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    while(x) {
        var lastDigit = x%10;
        result *= 10;
        result += lastDigit;
        x = parseInt(x/10);
    }
    return result;
    
};