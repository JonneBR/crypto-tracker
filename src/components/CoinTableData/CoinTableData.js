import React, { Fragment } from 'react';

export const CoinTableData = ({ item }) => {
  return (
    <Fragment>
      <tr>
        <td className='coin'>
          <img src={item.image} alt='' />
          {item.symbol.toUpperCase()}
        </td>
        <td className='left-sidee'>
          ${item.current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </td>
        <td className='text-danger'>-0.2%</td>
        <td className='text-green'>6.1%</td>
        <td className='text-green'>8.1%</td>
        <td>
          ${item.high_24h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </td>
        <td>
          {' '}
          ${item.low_24h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </td>
      </tr>
    </Fragment>
  );
};
