import React, { createContext, useState } from 'react';

export const EncryptionContext = createContext();

export const EncryptionProvider = ({ children }) => {
    const [encryptionResult, setEncryptionResult] = useState(null);

    return (
        <EncryptionContext.Provider value={{ encryptionResult, setEncryptionResult }}>
            {children}
        </EncryptionContext.Provider>
    );
};
