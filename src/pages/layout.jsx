import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <header className="bg-[#0F0F0F] text-white font-bold h-16 relative z-10">
        <nav className="flex items-center justify-between p-4 px-20 bg-[#020811f4] border-b border-b-[#545454]">
          <div className="flex items-center">
            <Link to={"/"}>Home</Link>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block md:hidden"
          >
            <div className="w-6 h-6 bg-white mask-hamburger"></div>
          </button>
          <div className={`md:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row absolute md:relative left-0 right-0 top-16 md:top-0 bg-[#020811f4] w-full md:w-auto z-20`}>
            <Link to={"/attack"} className="py-2 px-4 hover:underline">Attack</Link>
            <Link to={"/decrypt"} className="py-2 px-4 hover:underline">Decrypt</Link>
            <Link to={"/encrypt"} className="py-2 px-4 bg-[#2B4162] rounded-xl hover:scale-105 transition-all duration-300">
              Encrypt
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}
