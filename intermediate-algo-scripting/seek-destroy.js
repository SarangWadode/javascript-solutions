// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr,...nums) {
    console.log(arr,nums)
    console.log(arr.filter(elem => !nums.includes(elem)))
    return arr.filter(elem => !nums.includes(elem))
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
