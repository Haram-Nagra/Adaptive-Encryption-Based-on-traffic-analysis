import React, { useContext, useState } from 'react';
import { encryptData } from '../services/encryption-service';
import { EncryptionContext } from './Encryption-Context';

const EncryptForm = () => {
    const [data, setData] = useState('');
    const [threshold, setThreshold] = useState(1000000); // Default threshold
    const { encryptionResult, setEncryptionResult } = useContext(EncryptionContext);

    const handleEncrypt = async () => {
        try {
            const response = await encryptData(data, threshold);
            setEncryptionResult(response);
            console.log('Encrypted data:', response);
        } catch (error) {
            console.error('Encryption failed:', error.message);
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
                className='text-lg text-white font-thin border rounded-3xl w-[400px] p-2 px-3 bg-gray-600 bg-opacity-40 border-slate-400'
                type="text"
                value={data}
                onChange={(e) => setData(e.target.value)}
                placeholder="Enter data to encrypt"
            />
            <textarea
                className="w-[400px] h-[300px] text-lg text-white font-thin border rounded-3xl p-2 px-3 bg-gray-600 bg-opacity-40 border-slate-400"
                placeholder="Ciphertext"
                value={
                    encryptionResult
                        ? `Nonce: ${encryptionResult.nonce}\nCiphertext: ${encryptionResult.ciphertext}\nTag: ${encryptionResult.tag}\nKey Size: ${encryptionResult.key_size}-bit`
                        : ''
                }
                readOnly
            />
            <div className="flex items-center gap-x-4 text-gray-400 font-thin accent-[#2B4162]">
                <div>
                    <label>
                        <input
                            type="radio"
                            value={1000000}
                            checked={threshold === 1000000}
                            onChange={handleThresholdChange}
                        />
                        High Traffic
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value={500000}
                            checked={threshold === 500000}
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
            <button
                className="rounded-xl h-[30px] w-[96px] -mt-1 bg-[#2B4162] text-white hidden md:block hover:scale-125 transition-all duration-300"
                onClick={handleEncrypt}
            >
                Encrypt
            </button>
        </div>
    );
};

export default EncryptForm;
