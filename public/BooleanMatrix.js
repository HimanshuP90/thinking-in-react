/* 
	In a matrix (having 0 and 1) if any value is 1 than fill its row and column with 1
ex: 
1 0
0 0

1 1
1 0

ex: 
0 0 0
0 0 1

0 0 1
1 1 1

ex:
1 0 0 1
0 0 1 0
0 0 0 0

1 1 1 1
1 1 1 1
1 0 1 1

*/

(function(){
	var arr = [
				[1,  0,  0,  1],
			  [0,  0,  1,  0],
			  [0,  0,  0,  0],
			  [0,  0,  1,  0]
			];
	var row = new Array(4);
	var col = new Array(4);
	for (var i = 0; i<row.length; i++){
		row[i] = 0;
	}

	for (var i = 0; i<col.length; i++){
		col[i] = 0;
	}

	for (var i = 0; i<row.length-1; i++){
		for (var j = 0; j<col.length-1; j++){
			if (arr[i][j]) {
				row[i] = 1;
				col[j] = 1;
			}
		}
	}

// console.log(row);
// console.log(col);


	for (var i = 0; i<row.length-1; i++){
		for (var j = 0; j<col.length-1; j++){
			if ( row[i] == 1 || col[j] == 1) {
				arr[i][j] = 1;
			}
		}
	}

	// console.log(arr);

})()

