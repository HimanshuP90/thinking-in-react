//Print matrix in spiral anticlock-wise

(function(){
	var arr = [
			   [1,  2,  3,  4,  5,  6],
			   [7,  8,  9,  10, 11, 12],
			   [13, 14, 15, 16, 17, 18]
			  ];
	console.log(arr);

	var i, rowStart = 0, colStart = 0, rowEnd =3 , colEnd=6;

	while(rowStart < rowEnd && colStart < colEnd) {
		//print first row
		for (i = colStart; i < colEnd; i++) {
			console.log(arr[rowStart][i]);
		}
		rowStart++;
		
		//print last column
		for (i = rowStart; i < rowEnd; i++ ){
			console.log(arr[i][colEnd-1])
		}
		colEnd--;

		//print last row from the remaining
		if (rowStart < rowEnd) {
			for (i = colEnd-1; i >= colStart; i--) {
				console.log(arr[rowEnd-1][i]);
			}
			rowEnd--;
		}

		//print first column from the remaining
		if (colStart < colEnd) {
			for (i = rowEnd-1; i >= rowStart; i--) {
				console.log(arr[i][colStart]);
			}
			colStart++;
		}
	}


})()