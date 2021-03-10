import React, { Fragment } from 'react';

export const CoinTableData = ({ item }) => {
  return (
    <Fragment>
      <tr>
        <td className='coin'>
          <img src={item.image} alt='' />
          {item.symbol.toUpperCase()}
        </td>
        <td className='left-sidee'>$53,790.40</td>
        <td className='text-danger'>-0.2%</td>
        <td className='text-green'>6.1%</td>
        <td className='text-green'>8.1%</td>
        <td>54,965.00</td>
        <td>50,971.00</td>
      </tr>
    </Fragment>
  );
};
