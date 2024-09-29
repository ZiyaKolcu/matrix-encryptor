const stringToMatrix = (data) => {
  let result = '';
  for (let i = 0; i < data.length; i++) {
    result += data.charCodeAt(i);
  }
  const arr = result.split('').map((num) => parseInt(num, 10));
  let matrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  let row = 0;
  let col = 0;
  arr.forEach((value) => {
    matrix[row][col] += value;
    col++;

    if (col >= matrix[row].length) {
      col = 0;
      row++;
      if (row >= matrix.length) {
        row = 0;
      }
    }
  });
  return matrix;
};

module.exports = stringToMatrix;
