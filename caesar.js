const ASCII_A = 97;
const ASCII_Z = 122;

const caesar = (string) => string.split('').map((ele) => {
  const uppercase = (ele.match(/[A-Z]/));
  const isLetter = (ele.match(/[A-Za-z]/));
  const rawCharCode = ele.toLowerCase().charCodeAt();
  const charCode = rawCharCode + 3 > ASCII_Z
    ? (rawCharCode + 3 - ASCII_Z) + ASCII_A - 1
    : rawCharCode + 3;
  const letter = isLetter ? String.fromCharCode(charCode) : ele;
  return uppercase ? letter.toUpperCase() : letter;
}).join('');

export default caesar;
