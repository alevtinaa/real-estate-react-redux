import React from 'react';
import '../Items.css'

export default (props) => {
  return (
    <div
      className='item-price'
      >
        {
          props.offer ? (
            props.offer.price
            .toLocaleString()
            + ' ' + props.offer.currency
            )
            : `No ${props.type} offers`
          }
            </div>
  )
};
