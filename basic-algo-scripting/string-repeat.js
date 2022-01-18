// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge 
// do not use the built-in .repeat() method.

//iterative approach
function repeatStringNumTimes(str, num) {
    let tmp = '';
    let i = 0;
    while(i<num) {
      tmp+=str;
      i++;
    }
    return tmp;
  }

//recursive approach
function repeatStringNumTimes(str, num) {
    if (num < 1) {
      return ''
    }
    return str + repeatStringNumTimes(str,num-1)
  }
  

  repeatStringNumTimes("abc", 3);