function chocolateDistributionProblem(chocolates, students) {
    const noOfPackets = chocolates.length;
    if(students == 0 || noOfPackets == 0) return 0;
    chocolates.sort((a, b) => a-b)
    if(noOfPackets < students) return -1;
    let minDiff = 999999;
    let first = 0,
        last = 0;
    for ( let i = 0; (i + students -1) < noOfPackets; i++){
        let diff = chocolates[i+students-1]-chocolates[i]
        if(diff < minDiff) {
            minDiff = diff;
            first = i;
            last = i + students -1;
        }
    }
    console.log('Minimum Difference = ', chocolates[last]-chocolates[first])
}

chocolateDistributionProblem([7, 3, 2, 4, 9, 12, 56], 3)
chocolateDistributionProblem([3, 4, 1, 9, 56, 7, 9, 12], 5)