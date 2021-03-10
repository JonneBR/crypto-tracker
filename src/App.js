import React, { useState, useEffect } from 'react';
import { CoinTable } from './components/CoinTable/CoinTable';
import './App.css';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    function getCoinsData() {
      axios
        .get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false'
        )
        .then(function (response) {
          // console.log(response.data);
          setItems(response.data);
        })
        .catch(function (error) {
          // console.log(error);
        });
    }
    getCoinsData();
  }, []);

  return (
    <div className='coin-app'>
      <div className='header-content'>
        <h1>Search for Cryptocurrency</h1>
        <input type='text' className='search-coin' placeholder='Search' />
      </div>
      <CoinTable items={items} />
    </div>
  );
}

export default App;
