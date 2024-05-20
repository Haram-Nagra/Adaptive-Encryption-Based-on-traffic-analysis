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
    <div className='font-serif -mt-10 flex flex-col items-center gap-y-5'>
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
    <button disabled type="button" class="text-white bg-rose-900 hover:bg-red-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-red-700 dark:hover:bg-red-700 dark:focus:ring-blue-800 inline-flex items-center">
        <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
        </svg>
        Loading...
    </button>

    </div>
    );
    };

    export default AttackForm;
