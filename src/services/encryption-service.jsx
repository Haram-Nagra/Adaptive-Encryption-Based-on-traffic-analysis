const API_URL = 'http://localhost:5000';

export const encryptData = async (data, threshold) => {
    const response = await fetch(`${API_URL}/encrypt`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data, threshold }), // Include threshold in the request body
    });
    if (!response.ok) {
        throw new Error('Failed to fetch');
    }
    return response.json();
};

export const decryptData = async (nonce, ciphertext, tag) => {
    const response = await fetch(`${API_URL}/decrypt`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nonce, ciphertext, tag }),
    });
    if (!response.ok) {
        throw new Error('Failed to fetch');
    }
    return response.json();
};
