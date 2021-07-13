const capitalize = (string) => {
  if (typeof string !== 'string') {
    return 'invalid input';
  }
  return string.charAt(0).toUpperCase() + string.substring(1);
}

export default capitalize;
