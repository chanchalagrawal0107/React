import React, { useState, useEffect } from 'react';

const App = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRates, setExchangeRates] = useState({});

  useEffect(() => {
    // Fast fetch when component mounts
    const fetchRates = async () => {
      const res = await fetch('https://open.er-api.com/v6/latest/USD');
      const data = await res.json();
      setExchangeRates(data.rates);
    };

    fetchRates();
  }, []);

  const convertCurrency = () => {
    if (!amount || !exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) return;

    const usdAmount = amount / exchangeRates[fromCurrency];
    const result = (usdAmount * exchangeRates[toCurrency]).toFixed(2);
    setConvertedAmount(result);
  };

  const currencyList = Object.keys(exchangeRates);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Currency Converter</h2>

        <input
          type="number"
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <div className="flex gap-4 mb-4">
          <select
            className="flex-1 p-2 border rounded"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {currencyList.map((cur) => (
              <option key={cur} value={cur}>{cur}</option>
            ))}
          </select>

          <select
            className="flex-1 p-2 border rounded"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {currencyList.map((cur) => (
              <option key={cur} value={cur}>{cur}</option>
            ))}
          </select>
        </div>

        <button
          onClick={convertCurrency}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded"
        >
          Convert
        </button>

        {convertedAmount && (
          <div className="mt-4 text-center text-lg font-medium text-green-600">
            {amount} {fromCurrency} = {convertedAmount} {toCurrency}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
