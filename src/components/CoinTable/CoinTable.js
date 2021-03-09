import React from 'react';
import './CoinTable.css';

export const CoinTable = () => {
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
          <tr>
            {/* <img src='/images/bitcoin.webp' alt='' /> */}
            <td className='coin'>
              <img src='/images/bitcoin.webp' alt='' />
              BTC
            </td>
            <td className='left-sidee'>$53,790.40</td>
            <td className='text-danger'>-0.2%</td>
            <td className='text-green'>6.1%</td>
            <td className='text-green'>8.1%</td>
            <td>54,965.00</td>
            <td>50,971.00</td>
          </tr>
        </tbody>
      </table>
      {/* Fazer titulos e cada item com fundo gray */}
    </div>
  );
};
