// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    const re1 = /([a-z]+)([A-Z]+)/gm;
    str = str.replace(re1,"$1 $2");
    const re2 = /[\s_]/gm
    return str.replace(re2,'-').toLowerCase()
  }
  spinalCase('thisIsSpinalTap');
