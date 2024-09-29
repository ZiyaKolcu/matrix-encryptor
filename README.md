# MatrixEncryptor

MatrixEncryptor is a JavaScript library that implements matrix-based encryption for secure password handling. The library provides an easy-to-use interface with two main functions and has no external dependencies.

## Features

- **Matrix-Based Encryption**: Utilizes matrix operations for secure password encryption.
- **No Dependencies**: Lightweight and easy to integrate into any project.
- **Simple API**: Intuitive functions for encryption and comparison.

## Usage
### Setting Up Key Matrix

To use the library, you need to define a `keyMatrix`. It should be a `3x3` matrix. It is recommended to store this in a `.env` file. You can include it in your project using the `dotenv` package. 

1. **Install dotenv:**
   ```bash
   npm install dotenv
   ```
   
2. **Defining a `3x3` `keyMatrix`**
   ```
   KEY_MATRIX=[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
   ```

3. **Importing `keyMatrix`**
   ```javascript
    require('dotenv').config();
    const keyMatrix = JSON.parse(process.env.KEY_MATRIX);
    ```
    
## Functions
1. **matrixEncryptor()**
    ```javascript
    const { matrixEncryptor } = require('./matrix-encryptor/encryptor');

    const encryptedPassword = matrixEncryptor('your-password', keyMatrix);
    console.log(encryptedPassword);
    ```

2. **compareEncryptedPassword()**
    ```javascript
    const { compareEncryptedPassword } = require('./matrix-encryptor/compareEncrypted');

    const isMatch = compareEncryptedPassword('your-input-password', encryptedPassword, keyMatrix);
    console.log(isMatch); // true or false
    ```

