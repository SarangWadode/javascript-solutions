// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    const alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const start = alph.indexOf(str[0]);
    let count = 0;
    for (let i=start; i<start+str.length; i++) {
      if (alph[i] !== str[count]) {
        console.log(alph[i])
        return alph[i];
      } 
      count += 1;
    }
  }
  
  fearNotLetter("abce");
