/* PROBLEM
   Clean an object data according to the following rules
   Remove all keys that have values of N/A, -, or empty strings
   If one of theses values appear in an array, remove that single item from the array.

   Example Input:
   {
    "name": {"first": "Emmanuel", "middle": "N/A", "last": "Techemmy"}
    "age": 45
    }

    Example Output
    {
     "name": {"first": "Emmanuel", "last": "Techemmy"}
     "age": 45
    }
*/

function cleanObject(object) {
    const objectKeys = Object.keys(object);
    if (objectKeys.length <= 0) {
        return;
    }

   for (let i = 0; i < objectKeys.length; ++i) {
        const key = objectKeys[i];
        const isValueAnArray = Array.isArray(object[key]);

        if (!isValueAnArray && typeof object[key] === 'object') {
            cleanObject(object[key]);
        } else if (UNALLOWED_CHARACTERS.includes(object[key])) {
            delete object[key]
        } else if (isValueAnArray) {
            object[key] = cleanArray(object[key])
        }
   }

   return object;
}

function cleanArray(arr) {
    return arr.filter(item => {
        if (UNALLOWED_CHARACTERS.includes(item)) {
            return false;
        } else {
            return true;
        }
    })
}


// test cases
var UNALLOWED_CHARACTERS = ["", "N/A", "-"]
const rawData = {
    name: { first: 'Robert', middle: '', last: 'Smith' },
    age: 25,
    DOB: '-',
    hobbies: [ 'running', 'coding', '-' ],
    education: { highschool: 'N/A', college: 'Yale' }
  }
const solution = {
    name: { first: 'Robert', last: 'Smith' },
    age: 25,
    hobbies: [ 'running', 'coding' ],
    education: { college: 'Yale' }
}

const cleanedData = cleanObject(rawData);
console.log(JSON.stringify(cleanedData) === JSON.stringify(solution));