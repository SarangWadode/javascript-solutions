// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
    let temp = str.split(' ')
    let arr = []
    for (let i=0;i<temp.length;i++) {
      arr.push(temp[i][0].toUpperCase()+temp[i].slice(1).toLowerCase())
    }
    return arr.join(' ');
  }
  
  titleCase("I'm a little tea pot");
