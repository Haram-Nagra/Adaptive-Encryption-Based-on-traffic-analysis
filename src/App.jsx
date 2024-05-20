import React, { useState } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { EncryptionContext } from "./components/Encryption-Context";
import Attack from "./pages/attack";
import Decrypt from "./pages/decrypt";
import Encrypt from "./pages/encrypt";
import Home from "./pages/home";
import Layout from "./pages/layout";

export default function App() {
  const [encryptionResult, setEncryptionResult] = useState(null);

  return (
    <EncryptionContext.Provider value={{ encryptionResult, setEncryptionResult }}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/encrypt" element={<Encrypt />} />
            <Route path="/decrypt" element={<Decrypt />} />
            <Route path="/attack" element={<Attack />} />
          </Routes>
        </Layout>
      </Router>
    </EncryptionContext.Provider>
  );
}
