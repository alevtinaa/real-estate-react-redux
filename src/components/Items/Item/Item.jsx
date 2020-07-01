import React from 'react';
import '../Items.css';
import ItemMainImg from './ItemMainImg';
import ItemName from './ItemName';
import ItemPrice from './ItemPrice';
import ItemInfo from './ItemInfo';

export default (props) => {
  const offerType = `${props.type}Offer`;

  return (
    <div
      className={`item disabled-${!props[offerType]}`}
      >
      
        <ItemMainImg
          image={props.image}
          />

        <ItemName
          kind={props.kind}
          mkadDistance={props.location.mkadDistance}
          city={props.location.city}
          />

        <ItemPrice
          type={props.type}
          offer={props[offerType]}
          />

        <ItemInfo
          landArea={props.landDetails.area}
          estateArea={props.specification.area}
          />

      </div>
    )
  };
