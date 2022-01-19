// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
// In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
    const newArr = [];
    arr1.map(elem => {
      if (arr2.indexOf(elem) === -1) {
        newArr.push(elem)
      }
    })
    arr2.map(elem => {
      if (arr1.indexOf(elem) === -1) {
        newArr.push(elem)
      }
    })
    console.log(newArr)
    return newArr;
  }
  
  diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
