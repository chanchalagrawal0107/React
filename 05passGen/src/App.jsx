import React, { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");
      
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*-+=[]{}~`";

    let pass = "";
    for (let i = 0; i < length; i++) {
      const idx = Math.floor(Math.random() * chars.length);
      pass += chars[idx];
    }
    setPassword(pass);
  }, [length, includeNumbers, includeSymbols]);

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      passwordRef.current?.select();
    }
  };

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-10 bg-slate-900 text-white gap-6">
      <h1 className="text-4xl font-bold">Password Generator</h1>

      <div className="bg-slate-800 p-6 rounded-2xl shadow-lg w-full max-w-md flex flex-col gap-4">
        <div className="flex">
          <input
            ref={passwordRef}
            type="text"
            value={password}
            readOnly
            className="flex-1 bg-slate-700 px-3 py-2 rounded-l-lg outline-none"/>
          <button
            onClick={copyToClipboard}
            className="px-4 py-2 rounded-r-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800">
            Copy
          </button>
        </div>

        <label className="flex items-center justify-between">
          <span>Password length: {length}</span>
          <input
            type="range"
            min="4"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-1/2 accent-blue-500"/>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}/>
          Include numbers (0‑9)
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}/>
          Include symbols (!@#$…)
        </label>

        <button
          onClick={generatePassword}
          className="w-full mt-2 py-2 rounded-lg bg-green-600 hover:bg-green-700 active:bg-green-800">
          Generate
        </button>
      </div>
    </div>
  );
}

export default App;
