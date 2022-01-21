// Pig Latin is a way of altering English Words. The rules are as follows:

// If a word begins with a consonant, take the first consonant or consonant cluster, 
// move it to the end of the word, and add ay to it.

// If a word begins with a vowel, just add way at the end.

//without using regex
function translatePigLatin(str, c = 0) {
    if (c === str.length) return str + 'ay'
    const vowel = 'aeiou'
    const first = str[0];
    const second = str[1];
    if (!vowel.includes(first)) {
      if (vowel.includes(second)) {
        return str.slice(1) + first + 'ay';
      }
      return translatePigLatin(str.slice(1) + first, c + 1)
    }
    return str + 'way';
  }
  
//using regex
function translatePigLatin(str, c = 0) {
    const re = /^[^aeiou]+/gm;
    const match = str.match(re)
    if (match) {
      return str.replace(match,'') + match + 'ay';
    }
    return str + 'way';
  }

  translatePigLatin("cklonsonant");
  