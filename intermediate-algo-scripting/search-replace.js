// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).

function myReplace(str, before, after) {
    const re = /^[A-Z]/gm;
    after = (re.test(before[0])) ? after.replace(/^[a-z]/gm,after[0].toUpperCase()):after.toLowerCase();
    return str.replace(before,after);
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped");
