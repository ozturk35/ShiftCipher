class ShiftCipher {
  constructor(shiftBy) {
    this._shiftBy = shiftBy;
  }

  encrypt(string) {
    let encryptStr = '';
    for (let i = 0; i < string.length; i++) {
        if (charInAlphabet(string[i])) {
          let shiftedChar = string.toUpperCase().charCodeAt(i) + this._shiftBy;

          //Wrap the shifted char if out of alphabet
          if (shiftedChar > 'Z'.charCodeAt(0)) {
            shiftedChar -= 26; 
          }
          encryptStr += String.fromCharCode(shiftedChar);
        }
        else {
            encryptStr += string[i];
        }
    }
    return encryptStr;
  }

  decrypt(string) {
    let decryptStr = '';
    for (let i = 0; i < string.length; i++) {
      if (charInAlphabet(string[i])) {
          let shiftedChar = string.toLowerCase().charCodeAt(i) - this._shiftBy;

          //Wrap the shifted char if out of alphabet
          if (shiftedChar < 'a'.charCodeAt(0)) {
            shiftedChar += 26; 
          }
          decryptStr += String.fromCharCode(shiftedChar);
        }
        else {
          decryptStr += string[i];
        }
    }
    return decryptStr;
  }
}

const charInAlphabet = char => {
  if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
    return true;
  }
  else {
    return false;
  }
}

const cipher = new ShiftCipher(2);
console.log(cipher.encrypt('i love to code!'));// should return 'K NQXG VQ EQFG!'
console.log(cipher.decrypt('K <3 OA RWRRA'));// should return 'i <3 my puppy'