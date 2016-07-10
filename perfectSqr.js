// brute force approach
function pSqr (num) {
	// edge case: if num is 1, 0, or a negitive number
	if (num <= 1) {
		return true;
	}
	// solve with simple loop 
	for (var i = 0; i < num; i++ ) {
		if (i*i === num) {
			return true;
		} 
	}
}

pSqr(49);  // true

// refactor to address big O time issue
function pSqrRe(num){
	// edge case: if num is 1, 0, or a negitive number
	if (num <= 1) {
		return true;
	}
	var newNum = 0;
	// solve with sum
	for (var i = 1; i < num/2; i++) {
		if (i % 2 !== 0) {
			newNum += i;
		}
		if (newNum === num) {
		return true;
		}
	} 	
}

pSqrRe(81);


