function addNumber(num1, num2) {
	return num1 + num2;
}


function addAsync(num1, num2, fn) {
	setTimeout(() => {
		fn(num1 + num2)
	}, 0)
}

export {addNumber, addAsync};