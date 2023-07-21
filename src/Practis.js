const decryptAES = (encryp, key) => {
    const decrypted = CryptoJS.AES.decrypt(encryp, key);
    if (decrypted) {
      try {
        console.log(decrypted);
        // const expireTime = JSON.parse(decrypted);
        const { employeId, expireTime } = decrypted.toString(CryptoJS.enc.Utf8);
    const currentTime = Date.now();
        if (expireTime >= currentTime) {
          return { employeId, isValid: true };
        } else {
          return { isValid: false };
        }
      } catch (error) {
        return { isValid: false };
      }
  };

} 

const encryptedData = '...'; 
const decryptionResult = decryptAES (encryptedData);

if (decryptionResult.isValid) {
  console.log('Decrypted ID:', decryptionResult.id);
} else {
  console.log('Invalid or expired data.');
}
  //  console.log(decryptAES);