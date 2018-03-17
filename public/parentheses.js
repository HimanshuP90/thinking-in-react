(function(){
	var inputStr = '{}[]()';
	var expression = inputStr.split(''); //convert the string in array
	var stack = [];

	for( var i = 0; i < expression.length; i++) {
			if (isParanthesis(expression[i])) {
				if (isOpenParenthesis(expression[i])) {
					stack.push(expression[i]);
										console.log('matc')

				} else {
					if (stack.length == 0) {
						return Print(false);
					}
					var top = stack.pop();
					if (!matches(top, expression[i])) {
						return Print(false);
					}
				}
			}
	}

function isParanthesis(char) {
 	var inputStr = '{}[]()';
 	if (inputStr.indexOf(char) > -1) {
 		return true;
 	} else {
 		return false;
 	}
 }

function isOpenParenthesis(char) {
	for (var j = 0; j < inputStr.length; j++) {
		if (inputStr[j] === char) {
			return true;
		}
	}
	return false;
}

function matches(top, expression) {
	for (var i = 0; i < inputStr.length; i++) {
		console.log(inputStr[i])
		if (inputStr[i] === top && inputStr[i] === expression) {
			return true
		} else {
			return false
		}
	}
}

function Print(bool) {
	console.log(bool)
	if (bool) {
		console.log('Paranthesis matched..!!')
	} else {
		console.log('Paranthesis not matched..!!')
	}
}

})()