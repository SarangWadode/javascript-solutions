// Fill in the object constructor with the following methods below:
// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method. 
// The methods that take an argument must accept only one argument and it has to be a string. 
// These methods must be the only available means of interacting with the object.

const Person = function(firstAndLast) {
    let full = firstAndLast;
    this.getFirstName = function() {
      return full.split(' ')[0]
    }
    this.getLastName = function() {
      return full.split(' ')[1]
    }
    this.getFullName = function() {
      return full;
    };
    this.setFirstName = (first) => {
      full = first + ' ' + full.split(' ')[1];
    }
    this.setLastName = (last) => {
      full = full.split(' ')[0] + ' ' + last;
    }
    this.setFullName = (fullname) => {
      full = fullname;
    }
    return full;
  };
  
  const bob = new Person('Bob Ross');
  bob.getFullName();
