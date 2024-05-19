import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { encryptData, decryptData } from '../services/encryption-service';

const EncryptionForm = () => {
    const [inputData, setInputData] = useState('');
    const [encryptedData, setEncryptedData] = useState(null);
    const [decryptedData, setDecryptedData] = useState(null);
    const [textareaValue, setTextareaValue] = useState('');
    const navigate = useNavigate();

    const handleEncrypt = async () => {
        const response = await encryptData(inputData);
        setEncryptedData(response);
        setTextareaValue(`Nonce: ${response.nonce}\nCiphertext: ${response.ciphertext}\nTag: ${response.tag}\nKey: ${response.key_size}`);
    };

    const handleNavigateToDecrypt = () => {
        if (encryptedData) {
            navigate('/decrypt', { state: { encryptedData } });
        } else {
            alert("No encrypted data available. Please encrypt data first.");
        }
    };
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
            onClick={handleEncrypt}>Encrypt</button>
        </div>
    );
};

export default EncryptionForm;
