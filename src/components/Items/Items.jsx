import React, { useState, useEffect } from 'react';
import * as axios from 'axios';
import Item from './Item/Item';
import Loader from '../Loader/Loader';

export default (props) => {
  let [page, setPage] = useState(0);
  let [isFetching, setIsFetching] = useState(false);

  const loadMoreData = () => {
    setIsFetching(true);
    axios.get(`https://api.jqestate.ru/v1/properties/country?pagination[limit]=18&pagination[offset]=${18*page}`)
      .then(resp => {
        resp.data.items.forEach(
          item => props.setItem(item)
          );
        setPage(page++);
        setIsFetching(false);
        }
      )
  };

  useEffect(
    () => {
      if (!props.items.length) {
        loadMoreData()
      } else {
        return;
      }
    }, []
  )

  return (
    <>
      <h3>
        Элитная недвижимость в Подмосковье
      </h3>

      {
        isFetching && <Loader />
      }

      <div
        className='items-container'
        >
          {
            props.items && props.items.map(
              (item, i) => <Item
                type={props.type}
                key={i}
                {...item}
                />
              )
          }
      </div>

      {
      !!props.items.length &&
      <button
        className='load-more-button'
        onClick={
          () => {
            setPage(page++);
            loadMoreData();
          }
        }
        >
        загрузить еще
      </button>
    }
    </>
  )
};
