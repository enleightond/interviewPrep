// create a manual version of the array 'join' method

function myjoin(arr, str){
	newStr = '';
	for (var i = 0; i < arr.length-1; i++) {
		newStr += arr[i] + str;
	}
	return newStr + arr[arr.length-1];
}

myjoin([1,2,3],'d');