const { matrixEncryptor } = require('./encryptor');

const compareEncryptedPassword = (
  enteredPassword,
  savedPassword,
  keyMatrix
) => {
  const encryptedPassword = matrixEncryptor(enteredPassword, keyMatrix);
  if (encryptedPassword === savedPassword) {
    return true;
  }
  return false;
};

const compareEncryptedPasswordAsync = async (
  enteredPassword,
  savedPassword,
  keyMatrix
) => {
  const encryptedPassword = matrixEncryptor(enteredPassword, keyMatrix);
  if (encryptedPassword === savedPassword) {
    return true;
  }
  return false;
};

module.exports = { compareEncryptedPassword, compareEncryptedPasswordAsync };
