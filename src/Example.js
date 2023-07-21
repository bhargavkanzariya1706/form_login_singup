import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
// import './style.css';
import * as CryptoJS from 'crypto-js';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [inputKey, setInputKey] = useState('');
  const [encryptedBase64Input, setEncryptedBase64Input] = useState('');
  const [encryptedBase64, setEncryptedBase64] = useState('');
  const [decryptKey, setDecryptKey] = useState('');
  const [outputText, setOutputText] = useState('');

  const encryptAES = (text, key) => {
    return CryptoJS.AES.encrypt(text, key).toString();
  };

  const decryptAES = (encryptedBase64, key) => {
    const decrypted = CryptoJS.AES.decrypt(encryptedBase64, key);
    if (decrypted) {
      try {
        const str = decrypted.toString(CryptoJS.enc.Utf8);
        if (str.length > 0) {
          return str;
        } else {
          return 'error 1';
        }
      } catch (e) {
        return 'error 2';
      }
    }
    return 'error 3';
  };

  useEffect(() => {
    setEncryptedBase64Input(encryptAES(inputText, inputKey));
  }, [inputText, inputKey]);

  useEffect(() => {
    setOutputText(decryptAES(encryptedBase64, decryptKey));
  }, [encryptedBase64, decryptKey]);

  return (
    <>
      <h1>Crypto-JS encryptAES</h1>
      <div className="form-group">
        <input
          className="form-control"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          style={{ width: '40%', height: 40, marginRight: 20 }}
          placeholder="Input Text"
        />
        <input
          className="form-control"
          value={inputKey}
          onChange={(event) => setInputKey(event.target.value)}
          style={{ width: '40%', height: 40 }}
          placeholder="Key"
        />
      </div>

      <pre className="output">
        <code>{encryptedBase64Input}</code>
      </pre>

      <h1>Crypto-JS decryptAES</h1>
      <div className="form-group">
        <input
          className="form-control"
          value={encryptedBase64}
          onChange={(event) => setEncryptedBase64(event.target.value)}
          style={{ width: '40%', height: 40, marginRight: 20 }}
          placeholder="Encrypted String"
        />
        <input
          className="form-control"
          value={decryptKey}
          onChange={(event) => setDecryptKey(event.target.value)}
          style={{ width: '40%', height: 40 }}
          placeholder="Key"
        />
      </div>

      <pre className="output">
        <code>{outputText}</code>
      </pre>
      <small>
        <a href="https://stackblitz.com/edit/cryptojs-aes-encrypt-decrypt" target="_blank">
          (View source code)
        </a>
      </small>
    </>
  );
};

render(<App />, document.getElementById('root'));
