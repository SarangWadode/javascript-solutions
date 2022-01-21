// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
    const flatten = [];
    for (let i=0; i<arr.length; i++) {
      // console.log(Array.isArray(arr[i]))
      if (Array.isArray(arr[i])) {
        // console.log(arr[i])
        flatten.push(...steamrollArray(arr[i]))
      } else {
        flatten.push(arr[i])
      }
    }
    return flatten;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);
