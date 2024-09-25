function caesarCipher(str, key) {
  let newString = "";
  let i = 0;

  while (i < str.length) {
    let code = str.charCodeAt(i);

    if (code > 96 && code < 123) {
      let shift = code + key;
      if (shift > 122) {
        shift -= 122;
        shift += 96;
      }
      newString += `${String.fromCharCode(shift)}`;
      i++;
    } else if (code > 64 && code < 91) {
      let shift = code + key;
      if (shift > 90) {
        shift -= 90;
        shift += 64;
      }
      newString += `${String.fromCharCode(shift)}`;
      i++;
    } else {
      newString += `${String.fromCharCode(code)}`;
      i++;
    }
  }

  return newString;
}

export { caesarCipher };
