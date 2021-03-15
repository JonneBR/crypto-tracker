import React, { useState, useEffect } from 'react';
import { CoinTable } from './components/CoinTable/CoinTable';
import './App.css';
import axios from 'axios';

//FILTER DATA ON SEARCH INPUT

function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');

  const filterSearch = (e) => {
    setSearch(e.target.value);
  };
  const filteredCoins = items.filter((coin) => coin.symbol.includes(search));

  const updateCurrencyList = () => {
    getCoinsData();
  };

  const getCoinsData = () => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then(function (response) {
        setItems(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getCoinsData();
  }, []);

  return (
    <div className='coin-app'>
      <div className='header-content'>
        <h1>Search for Cryptocurrency</h1>
        <button onClick={updateCurrencyList} className='btn-update'>
          Atualizar
        </button>
        <input
          onChange={filterSearch}
          type='text'
          className='search-coin'
          placeholder='Ex: btc'
        />
      </div>
      <CoinTable items={filteredCoins} setItems={setItems} />
    </div>
  );
}

export default App;
