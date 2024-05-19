import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { encryptData, decryptData } from '../services/encryption-service';

const EncryptionForm = () => {
    const [inputData, setInputData] = useState('');
    const [encryptedData, setEncryptedData] = useState(null);
    const [textareaValue, setTextareaValue] = useState('');
    const [threshold, setThreshold] = useState(1000000); // Default threshold
    const navigate = useNavigate();

    const handleEncrypt = async () => {
        try {
            const response = await encryptData(inputData, threshold); // Pass threshold to encryptData
            setEncryptedData(response);
            setTextareaValue(`Nonce: ${response.nonce}\nCiphertext: ${response.ciphertext}\nTag: ${response.tag}\nKey: ${response.key_size}`);
        } catch (error) {
            console.error('Encryption failed:', error.message);
        }
    };

    const handleNavigateToDecrypt = () => {
        if (encryptedData) {
            navigate('/decrypt', { state: { encryptedData } });
        } else {
            alert("No encrypted data available. Please encrypt data first.");
        }
    };

    const handleThresholdChange = (e) => {
        const newThreshold = parseInt(e.target.value);
        setThreshold(newThreshold);
    };

    return (
        <div className='font-serif flex flex-col items-center gap-y-5'>
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
            <div className="flex items-center gap-x-4 text-gray-400 font-thin accent-[#2B4162]">
                <div>
                    <label>
                        <input
                            type="radio"
                            value={10}
                            checked={threshold === 10}
                            onChange={handleThresholdChange}
                        />
                        High Traffic
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value={5}
                            checked={threshold === 5}
                            onChange={handleThresholdChange}
                            className='bg-transparent'
                        />
                        Medium Traffic
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value={0}
                            checked={threshold === 0}
                            onChange={handleThresholdChange}
                        />
                        Low Traffic
                    </label>
                </div>
            </div>
            <button className="rounded-xl h-[30px] w-[96px] -mt-1 bg-[#2B4162] text-white hidden md:block hover:scale-125 transition-all duration-300"
                onClick={handleEncrypt}>Encrypt
            </button>
        </div>
    );
};

export default EncryptionForm;
