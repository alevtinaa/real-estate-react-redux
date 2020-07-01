import React from 'react';

export default (props) => {
  return (
    <img
      alt=''
      className='item-main-img'
      src={
        /CLOUD/.test(props.image)
          || !props.image ?
            'https://homestaymatch.com/images/no-image-available.png'
            : props.image
          }
            >
    </img>
  )
};
