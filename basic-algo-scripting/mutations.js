// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

function mutation(arr) {
    const temp = arr.map(elem => elem.toLowerCase().split(''))
=    console.log(temp)
    let count = 0;
    for (let i=0; i<temp[1].length; i++) {
      for (let j=0; j<temp[0].length; j++) {
        if (temp[1][i].indexOf(temp[0][j]) >=0) {
          count+=1;
        }
      }
      if (count <= i) return false
    }
    // console.log(count)
    if (count >= temp[1].length) return true
    return false;
  }
  
  mutation(["hello", "hey"]);
