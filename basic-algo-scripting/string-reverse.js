// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

function reverseString(str) {
    const temp = [];
    const newArr = str.split('')
    let n = newArr.length;
    for(let i=n-1;i>=0;i--) {
      temp.push(newArr[i])
    }
    return temp.join('')
  }
// function reverseString(str) {
//     return str.split('').reverse().join('')
// }  
reverseString("hello");
