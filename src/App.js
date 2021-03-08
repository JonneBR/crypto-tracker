import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  // axios
  //   .get(
  //     'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  //   )
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  return (
    <div className='coin-app'>
      <div className='header-content'>
        <h1>Search for Cryptocurrency</h1>
        <input type='text' className='search-coin' />
      </div>
    </div>
  );
}

export default App;
