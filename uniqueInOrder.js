uniqueInOrder(str) {
	var newStr = str[0];
	for (var i = 1; i <= str.length - 1; i++) {
		if (str[i] != str [i -1]) {
			newStr += str[i];
		}

		return newStr;
	}
}

uniqueInOrder("AAAABBCCCDA");