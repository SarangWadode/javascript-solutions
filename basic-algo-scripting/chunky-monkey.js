// Write a function that splits an array (first argument) into groups the length of size (second argument) 
// and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    const groups = []
    for (let i=0; i<arr.length; i=i+size) {
      const group = []
      for (let j=0; j<size; j++) {
        if (arr[i+j] === undefined) break;
        group.push(arr[i+j])
      }
      console.log(group)
      groups.push(group)
    }
    console.log(groups)
    return groups;
  }
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
