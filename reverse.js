// This is a function that reverses a string

function revstr(str){
	var newStr = '';

	for (var i = str.length -1; i >= 0 ; i--) {
		newStr += str[i];
	}
	return newStr;
}

revstr("django"); // ognajd