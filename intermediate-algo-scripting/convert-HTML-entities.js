// Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
// in a string to their corresponding HTML entities.

function convertHTML(str) {
    const char = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    }
    const re = /[&<>'"]/
    const tmp = str.split('').map(elem => {
      if (re.test(elem)) return char[elem]
      return elem
    })
    return tmp.join('');
  }
  
convertHTML('<>');
