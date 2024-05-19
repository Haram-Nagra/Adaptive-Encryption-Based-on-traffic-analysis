import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { decryptData } from '../services/encryption-service';

const DecryptionForm = () => {
    const location = useLocation();
    const [decryptedData, setDecryptedData] = useState(null);
    const encryptedData = location.state?.encryptedData;

    const handleDecrypt = async () => {
        if (encryptedData) {
            const { nonce, ciphertext, tag } = encryptedData;
            const response = await decryptData(nonce, ciphertext, tag);
            setDecryptedData(response.data);
        }
    };

    return (
        <div className='font-serif mt-36 flex flex-col items-center gap-y-10 bg-gradient from-[#000000] to-[#130F40]'>
            <h1 className='text-4xl text-center text-white font-bold'>Decrypt Data</h1>
            <button
                className="rounded-xl h-[30px] w-[96px] -mt-1 bg-[#2B4162] text-white hidden md:block hover:scale-125 transition-all duration-300"
                onClick={handleDecrypt}
            >
                Decrypt
            </button>
            {decryptedData && (
                <div>
                    <h2 className='text-white'>Decrypted Data</h2>
                    <p className='text-white'>{decryptedData}</p>
                </div>
            )}
        </div>
    );
};

export default DecryptionForm;
