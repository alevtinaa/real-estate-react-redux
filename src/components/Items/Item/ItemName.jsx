import React from 'react';
import '../Items.css';

export default (props) => {
  const itemName = (
    () => {
      return (
        (
          props.kind === 'house' ?
          'Дом'
          : 'Квартира'
        )
        + ' в поселке '
        + '«' + props.city + '»'
        + ', '
        + props.mkadDistance + ' км'
      )
    }
  )();

  return (
    <span
      className='item-name'
      >
      {
        itemName
      }
      </span>
  )
};
