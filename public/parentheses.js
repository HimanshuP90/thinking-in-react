let inputStr = '{}[](){{[({})]}}';
let stack = [];
let expression = inputStr.split('');

function isBalanced(exp) {
	for (let i = 0; i < expression.length; i++) {
		if (exp[i] == '(' || exp[i] == '{' || exp[i] == '[') {
			stack.push(exp[i]);
		} else if( exp[i] == ')' || exp[i] == '}' || exp[i] == ']') {
			if (stack.length == 0 || !isMatchingPair(stack[stack.length -1], exp[i])) {
				return false;
			} else {
				stack.pop();
			}
		}
	}

	if (stack.length == 0) {
		return true;
	} else {
		return false;
	}
}

function isMatchingPair(ch1, ch2) {
	if (ch1 == '(' && ch2 == ')') {
		return true;
	} else if (ch1 == '{' && ch2 == '}') {
		return true;
	} else if (ch1 == '[' && ch2 == ']') {
		return true;
	} else {
		return false;
	}
}


function validString(exp) {
	if (isBalanced(exp)) {
		console.log("%cYeah expression is balanced  :-) ", "color: red; font-size:15px");
	} else {
		console.log("%cOoh expression is not balanced :-( ", "color: green; font-size:15px");
	}
}

validString(expression);