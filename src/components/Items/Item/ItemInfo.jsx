import React from 'react';
import '../Items.css';
import landAreaIcon from './area.png';
import estateAreaIcon from './acres.png';

export default (props) => {
  const returnImgByKey = (key) => {
    switch (key) {
      case 'landArea':
        return landAreaIcon;
      case 'estateArea':
        return estateAreaIcon;
      default:
        return;
    }
  };

  return (
    <div
      className='item-info'
      >
        {
          Object.entries(props).map(
            ([k, v], i) => (
              <React.Fragment
                key={i}
                >
                  {
                    v &&
                    <>
                      <img
                        alt=''
                        src={returnImgByKey(k)}
                        className='item-icon'
                        onDragStart={e => e.preventDefault()}
                        >
                      </img>
                      {
                        v + ` ${k === 'landArea' ? 'сот' : 'км2'}`
                      }
                </>
              }
            </React.Fragment>
          )
        )
      }
    </div>
  )
};
