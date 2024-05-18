import React, { useState } from 'react';
import { encryptData, decryptData } from '../services/encryption-service';

const EncryptionForm = () => {
    const [inputData, setInputData] = useState('');
    const [encryptedData, setEncryptedData] = useState(null);
    const [decryptedData, setDecryptedData] = useState(null);
    const [textareaValue, setTextareaValue] = useState('');

    const handleEncrypt = async () => {
        const response = await encryptData(inputData);
        setEncryptedData(response);
        setTextareaValue(`Nonce: ${response.nonce}\nCiphertext: ${response.ciphertext}\nTag: ${response.tag}\nKey: ${response.key}`);
        alert("Copy ciphertext to decrypt it via decrypt above.")

    };

    const handleDecrypt = async () => {
        const { nonce, ciphertext, tag } = encryptedData;
        const response = await decryptData(nonce, ciphertext, tag);
        setDecryptedData(response.data);
    };
    const data = document.getElementById("data")
    return (
        <div className='font-serif  mt-36 flex flex-col items-center gap-y-10 bg-gradient form-[#000000] to-[#130F40]'>
            <h1 className='text-4xl text-center text-white font-bold'>Adaptive Encryption</h1>
            <input
                className='text-lg text-white font-thin border rounded-3xl w-[400px] p-2 px-3 bg-gray-600 bg-opacity-40'
                type="text"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                placeholder="Enter data to encrypt"
            />
            <textarea className="w-[400px] h-[300px] text-lg text-white font-thin border rounded-3xl  p-2 px-3 bg-gray-600 bg-opacity-40"
                    placeholder="Ciphertext"
                    value={textareaValue}
                    readOnly>

            </textarea>
            <button className=" rounded-xl h-[30px] w-[96px] -mt-1 bg-[#2B4162] text-white hidden 
            md:block hover:scale-125 transition-all duration-300"
            onClick={handleEncrypt}>
                Encrypt</button>
                
            {/* {encryptedData && (
                <div>
                    <p>Nonce: {encryptedData.nonce}</p>
                    <p>Ciphertext: {encryptedData.ciphertext}</p>
                    <p>Tag: {encryptedData.tag}</p>
                    
                </div>
            )} */}
            <button className=" rounded-xl h-[30px] w-[96px] -mt-1 bg-[#2B4162] text-white hidden
            md:block hover:scale-125 transition-all duration-300"
            onClick={handleDecrypt}>Decrypt</button>
            {decryptedData && (
                <div>
                    <h2>Decrypted Data</h2>
                    <p>{decryptedData}</p>
                </div>
            )}
        </div>
    );
};

export default EncryptionForm;
