import React from 'react';
import Loader from './Loader.svg';
import './Loader.css';

export default () => {
  return <img
    alt=''
    src={Loader}
    onDragStart={e => e.preventDefault()}
    className='loader'
    >
    </img>
};
