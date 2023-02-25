// Code to sort a lowercase string
function sort(str) {
	const charArr = new Array(26) // array for the 26 alphabets
	charArr.fill(0)
	const aCharCode = 'a'.charCodeAt() // 97

	let currentLetterCharCode;

	for (let i = 0; i < str.length; i++) {
		charArr[str[i].charCodeAt() - aCharCode] += 1
	}

	let sortedStr = ""

	for (let i = 0; i < charArr.length; i++) {
		for (let j = 0; j < charArr[i]; j++) {
			sortedStr += (String.fromCharCode(i + aCharCode));
		}
	}

	return sortedStr
}

console.log(sort("ccdabb")) // abbccd
console.log(sort("a")) // a
console.log(sort("aa")) // aa
