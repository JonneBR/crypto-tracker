import React from 'react';
import { CoinTableData } from '../CoinTableData/CoinTableData';
import './CoinTable.css';

//Olhar https://cube.dev/

export const CoinTable = ({ items }) => {
  return (
    <div className='coin-list'>
      <table className='content-table'>
        <thead>
          <tr>
            <th className='coin-name'>Coin</th>
            <th className='coin-price left-sidee'>Price</th>
            <th>1h</th>
            <th>24h</th>
            <th>7d</th>
            <th>high_24h</th>
            <th>low_24h</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <CoinTableData key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
