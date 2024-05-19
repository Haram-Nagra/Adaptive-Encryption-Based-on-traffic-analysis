from flask import Flask, request, jsonify
from flask_cors import CORS
from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes
import psutil

app = Flask(__name__)
CORS(app)  # Allow requests from the React app's origin

class AdaptiveEncryption:
    def __init__(self):
        self.key_sizes = [16, 24, 32]  # Corresponding to 128, 192, and 256-bit keys
        self.current_key_size = self.key_sizes[0]
        self.key = self.generate_key(self.current_key_size)

    def generate_key(self, size):
        return get_random_bytes(size)

    def encrypt(self, data):
        cipher = AES.new(self.key, AES.MODE_GCM)
        ciphertext, tag = cipher.encrypt_and_digest(data)
        return cipher.nonce, ciphertext, tag

    def decrypt(self, nonce, ciphertext, tag):
        cipher = AES.new(self.key, AES.MODE_GCM, nonce=nonce)
        return cipher.decrypt_and_verify(ciphertext, tag)

    def analyze_traffic(self):
        net_io = psutil.net_io_counters()
        return net_io.bytes_sent + net_io.bytes_recv

    def adjust_encryption_strength(self, traffic_volume):
        if traffic_volume >= 10:  # High traffic threshold (example)
            self.current_key_size = self.key_sizes[2]
        elif traffic_volume >= 5:  # Medium traffic threshold (example)
            self.current_key_size = self.key_sizes[1]
        else:
            self.current_key_size = self.key_sizes[0]

        self.key = self.generate_key(self.current_key_size)
        print(f"Adjusted encryption to {self.current_key_size * 8}-bit key")

    def run(self, data):
        initial_traffic = self.analyze_traffic()
        current_traffic = self.analyze_traffic()
        traffic_volume = current_traffic - initial_traffic
        self.adjust_encryption_strength(traffic_volume)
        nonce, ciphertext, tag = self.encrypt(data)
        return nonce, ciphertext, tag

adaptive_encryption = AdaptiveEncryption()

@app.route('/encrypt', methods=['POST'])
def encrypt():
    data = request.json.get('data')
    threshold = request.json.get('threshold')  # New parameter
    
    if not data:
        return jsonify({'error': 'No data provided'}), 400
    
    data_bytes = data.encode()
    adaptive_encryption.adjust_encryption_strength(threshold)
    nonce, ciphertext, tag = adaptive_encryption.encrypt(data_bytes)
    key_size = adaptive_encryption.current_key_size * 8  # Get key size
    return jsonify({
        'nonce': nonce.hex(),
        'ciphertext': ciphertext.hex(),
        'tag': tag.hex(),
        'key_size': key_size  # Include key size in the response
    })


@app.route('/decrypt', methods=['POST'])
def decrypt():
    nonce = bytes.fromhex(request.json.get('nonce'))
    ciphertext = bytes.fromhex(request.json.get('ciphertext'))
    tag = bytes.fromhex(request.json.get('tag'))
    
    try:
        decrypted_data = adaptive_encryption.decrypt(nonce, ciphertext, tag)
        return jsonify({'data': decrypted_data.decode()})
    except ValueError:
        return jsonify({'error': 'Decryption failed'}), 400

if __name__ == '__main__':
    app.run(debug=True)
