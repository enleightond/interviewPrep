// Write a function that reverses a string using an array

function revArr(arr){
	newStr = '';

	for (var i = arr.length-1; i >= 0 ; i--) {
		newStr += arr[i];
	}

	return newStr;
}

revArr([1,2,3]); //321