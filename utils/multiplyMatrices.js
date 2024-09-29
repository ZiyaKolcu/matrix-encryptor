const multiplyMatrices = (keyMatrix, otherMatrix) => {
  const n = keyMatrix.length;
  let result = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        result[i][j] += keyMatrix[i][k] * otherMatrix[k][j];
      }
    }
  }

  return result;
};

module.exports = multiplyMatrices;
