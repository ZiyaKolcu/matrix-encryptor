const multiplyMatrices = require('./utils/multiplyMatrices');
const matrixToString = require('./utils/matrixToString');
const stringToMatrix = require('./utils/stringToMatrix');

const matrixEncryptor = (password, keyMatrix) => {
  const passwordMatrix = stringToMatrix(password);
  const encryptedMatrix = multiplyMatrices(keyMatrix, passwordMatrix);
  return matrixToString(encryptedMatrix);
};

const matrixEncryptorAsync = async (password, keyMatrix) => {
  const passwordMatrix = stringToMatrix(password);
  const encryptedMatrix = multiplyMatrices(keyMatrix, passwordMatrix);
  return matrixToString(encryptedMatrix);
};

module.exports = { matrixEncryptor, matrixEncryptorAsync };
