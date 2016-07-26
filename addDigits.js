// add digits together from an integer to get a single digit

function addDigits(num){
	// step 1. convert to a string
	var n = num.toString();
	// step 2. convert string into an array
	var arr = n.split("");
	// step 6. check if the length of array is 1
	if (arr.length === 1){
		return parseInt(arr[0])
	} else {
		//step 3 loop through the array 
		var sum = 0;
		for (var i = 0; i < arr.length; i++){
			//step 4. convert string to a number and step 5. sum the values
			sum += parseInt(arr[i]);
		}
	// recursive step	
	return addDigits(sum);
	}
}

addDigits(66);