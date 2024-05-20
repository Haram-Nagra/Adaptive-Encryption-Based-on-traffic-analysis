    // AttackForm.jsx
    import React, { useContext } from 'react';
import { EncryptionContext } from './Encryption-Context';

    const AttackForm = () => {
    const { encryptionResult } = useContext(EncryptionContext);

    const handleAttack = () => {
    // Logic to perform brute force attack using encryptionResult
    console.log('Starting attack on:', encryptionResult);
    // Add your brute force attack logic here
    };

    return (
    <div className='font-serif -mt-20 flex flex-col items-center gap-y-5'>
        <h1 className='text-4xl text-center text-white font-bold'>Brute Force Attack</h1>
        <textarea
        className="w-[400px] h-[300px] text-lg text-white font-thin border rounded-3xl p-2 px-3 bg-gray-600 bg-opacity-40 border-slate-400"
        placeholder="Encrypted data"
        value={
            encryptionResult
            ? `Nonce: ${encryptionResult.nonce}\nCiphertext: ${encryptionResult.ciphertext}\nTag: ${encryptionResult.tag}\nKey Size: ${encryptionResult.key_size}-bit`
            : 'No encrypted data available.'
        }
        readOnly
        />
        <button
        className="rounded-xl h-[30px] w-[96px] -mt-1 bg-[#2B4162] text-white hidden md:block hover:scale-125 transition-all duration-300"
        onClick={handleAttack}
        disabled={!encryptionResult} // Disable if no encryption result is available
        >
        Attack
        </button>
    

    </div>
    );
    };

    export default AttackForm;
