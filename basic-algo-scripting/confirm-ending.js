// Check if a string (first argument, str) 
// ends with the given target string (second argument, target).

function confirmEnding(str, target) {
    let minus = -target.length;
    let len = str.length;
    if(str.slice(minus,len) === target) {
      return true
    }
    return false;
  }
  
//using regex
function confirmEnding(str, target) {
    let re = new RegExp(target+'$','i')
    return re.test(str)
  }

  confirmEnding("Bastian", "an");
