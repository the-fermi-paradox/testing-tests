const analyze = (array) => {
  const results = {};
  results.average = Math.round((array.reduce((prev, ele) => prev + ele) / array.length) * 10) / 10;
  results.min = array.reduce((prev, ele) => ((prev < ele) ? prev : ele));
  results.max = array.reduce((prev, ele) => ((prev > ele) ? prev : ele));
  results.length = array.length;
  return results;
};
export default analyze;
