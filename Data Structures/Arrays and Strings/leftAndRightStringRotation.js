
function leftRotation(str, rotateBy) {
	return str.slice(rotateBy, str.length) + str.slice(0, rotateBy) 
}

function rightRotation(str, rotateBy) {
	return str.slice(str.length - rotateBy, str.length) + str.slice(0, str.length - rotateBy)
}

function rotateString(str, rotateBy) {
	leftRotated = leftRotation(str, rotateBy)
	rightRotated = rightRotation(str, rotateBy)
	return {leftRotated, rightRotated}
}

console.log(rotateString("abcde", 2)) // { leftRotated: 'cdeab', rightRotated: 'deabc' }