// write a function that takes a string and checks to see if its a palandrome

function myPal(str) {
	var revStr = '';
	for (var i = str.length-1; i >=0; i--) {
		revStr += str[i];
	}
	if (revStr === str) {
		return true;
	} else {
		return false;
	}
}

myPal('halah');