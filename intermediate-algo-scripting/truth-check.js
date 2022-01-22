// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// In other words, you are given an array collection of objects. 
// The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

function truthCheck(collection, pre) {
    const trues = collection.map(ob => {
      const keys = Object.keys(ob)
      let count = 0;
      for (let i=0; i<keys.length; i++) {
        if (ob[pre]) count+=1;
      }
      if (count === keys.length) return true
      return false
    })
    return (trues.includes(false)) ? false: true;
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
