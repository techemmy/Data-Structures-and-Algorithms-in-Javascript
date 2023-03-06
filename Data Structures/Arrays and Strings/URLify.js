// URLify: Write a method to replace all spaces in a string with '%20'.
// You may assume that the string has sufficient space at the end to hold the
// additional characters, and that you are given the "true" length of the string.
// (Note: If implementing in Java,please use a character array so that you can perform this operation in place.)

// EXAMPLE
// Input: "Mr John Smith    ", 13 Output: "Mr%20John%20Smith"

function URLify(text, textLen = text.length) {
  let output = "",
    spaces = 0;

  // compute the number of spaces in the text
  for (let i = 0; i < textLen; i++) {
    if (text[i] === " ") {
      spaces++;
    }
  }

  // assuming we won't have excess space at the end of the string
  for (let i = 0; i < textLen; i++) {
    if (text[i] === " " && spaces > 0) {
      output += "%20";
      spaces--;
    } else {
      output += text[i];
    }
  }

  return output;
}

// test cases
console.log(URLify("Mr John Smith    ", 13) === "Mr%20John%20Smith");
console.log(URLify("", 0) === "");
console.log(URLify("  hi", 4) === "%20%20hi");
