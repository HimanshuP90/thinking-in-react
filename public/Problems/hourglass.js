var arr = [ [2, 3, 0, 0, 0],
			[0, 1, 0, 0, 0],
			[1, 1, 1, 0, 0],
			[0, 0, 2, 4, 4],
			[0, 0, 0, 2, 0]
		  ]

/* 
All possible hourglass = (row-2)*(col-2); = 9

	2 3 0  3 0 0   0 0 0  
	1      0       0 
	1 1 1  1 1 0   1 0 0 

	0 1 0  1 0 0  0 0 0 
	1      1      0  
	0 0 2  0 2 4  2 4 4 

	1 1 1  1 1 0  1 0 0
	0      2      4
	0 0 0  0 0 2  0 2 0


	(5-2)*(5-2) = 9
*/

let sum = []
for ( i = 0; i < 3; i++) {
	for ( j = 0; j < 3; j++){
		sum.push((arr[i][j]+arr[i][j+1]+arr[i][j+2]) + (arr[i+1][j+1]) + (arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2]))
	}
}
console.log(Math.max.apply(null, sum));