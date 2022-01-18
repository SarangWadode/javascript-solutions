// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
    const temp = []
    for (let i=0; i<arr.length; i++) {
      if (arr[i]) temp.push(arr[i])
    }
    return temp;
  }
  
  bouncer([7, "ate", false, NaN,"", 9]);
