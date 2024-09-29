const matrixToString = (matrix) => {
  let result = '';
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      const element = matrix[i][j];
      result += element;
    }
  }
  return result;
};

module.exports = matrixToString;
