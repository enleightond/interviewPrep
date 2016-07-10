// brute force approach
function pSqr (num) {
	// edge case: if num is 1, 0, or a negitive number
	if num <= 1 {
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




