// Return the length of the longest word in the provided sentence.
// Your response should be a number.
function findLongestWordLength(str) {
    let temp = str.split(' ')
    let max=0;
    for (let i = 0;i<temp.length; i++){
      if(max<temp[i].length) {
        max=temp[i].length
      }
    }
    return max;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");