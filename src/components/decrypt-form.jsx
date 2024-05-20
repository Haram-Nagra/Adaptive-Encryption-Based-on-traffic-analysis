import React, { useContext, useState } from 'react';
import { decryptData } from '../services/encryption-service';
import { EncryptionContext } from './Encryption-Context';

const DecryptionForm = () => {
    const { encryptionResult } = useContext(EncryptionContext);
    const [decryptedData, setDecryptedData] = useState(null);

    const handleDecrypt = async () => {
        if (encryptionResult) {
            const { nonce, ciphertext, tag } = encryptionResult;
            try {
                const response = await decryptData(nonce, ciphertext, tag);
                setDecryptedData(response.data);
            } catch (error) {
                console.error('Decryption failed:', error.message);
            }
        }
    };

    return (
        <div className='font-serif -mt-60 flex flex-col items-center gap-y-5 bg-gradient from-[#000000] to-[#130F40]'>
            <h1 className='text-4xl text-center text-white font-bold'>Decrypt Data</h1>
            {encryptionResult ? (
                <button
                    className="rounded-xl h-[30px] w-[96px] -mt-1 bg-[#2B4162] text-white hidden md:block hover:scale-125 transition-all duration-300"
                    onClick={handleDecrypt}
                >
                    Decrypt
                </button>
            ) : (
                <p className='text-white mt-10'>No encrypted data to decrypt</p>
            )}
            {decryptedData && (
                <div>
                    <textarea
                        className="w-[400px] h-[200px] text-lg text-white font-thin border rounded-3xl p-2 px-3 bg-gray-600 bg-opacity-40"
                        value={decryptedData}
                        readOnly
                    />
                </div>
            )}
        </div>
    );
};

export default DecryptionForm;
