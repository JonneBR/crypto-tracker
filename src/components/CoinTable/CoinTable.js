import React from 'react';
import './CoinTable.css';

export const CoinTable = () => {
  return (
    <div className='coin-list'>
      <table className='content-list'>
        <thead>
          <tr>
            <th className='coin-name'>Coin</th>
            <th className='coin-price left-side'>Price</th>
            <th>1h</th>
            <th>24h</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>teste</td>
            <td className='left-side'>teste</td>
            <td>teste</td>
            <td>teste</td>
          </tr>
        </tbody>
      </table>
      {/* Fazer titulos e cada item com fundo gray */}
    </div>
  );
};
