const calculator = (() => {
  const add = (i, j) => i + j;
  const subtract = (i, j) => i - j;
  const multiply = (i, j) => i * j;
  const divide = (i, j) => i / j;

  return {
    add,
    subtract,
    multiply,
    divide,
  };
})();

export default calculator;
