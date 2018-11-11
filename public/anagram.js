var word1 = "Listen";
var word2 = "Silent";


var regularize = function(str) {
	return str.toLowerCase().split('').sort().join().trim();
};

var str1 = this.regularize(this.word1);
var str2 = this.regularize(this.word2);


if (str1 === str2) {
	return true;
} else {
	return false;
}


1) Given a tree, construct a json to send that tree over the internet flipkart
https://www.geeksforgeeks.org/serialize-deserialize-binary-tree/
https://stackoverflow.com/questions/15792794/convert-parent-child-array-to-tree

2) Given a stream of integers find median at given points
https://www.geeksforgeeks.org/median-of-stream-of-integers-running-integers/
