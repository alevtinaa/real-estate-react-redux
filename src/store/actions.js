import React from 'react';

const SET_ITEM = 'SET_ITEM';
const CLEAR_STATE = 'CLEAR_STATE';

export let setItem = (item) => (
  {
    type: SET_ITEM,
    id: item.id,
    kind: item.kind,
    location: {
      country: item.location.countryName,
      region: item.location.regionName,
      city: item.location.localityName,
      mkadDistance: item.location.mkadDistance,
      },
    rentOffer: item.rentOffer,
    saleOffer: item.saleOffer,
    specification: {
      area: item.specification.area,
      bedrooms: item.specification.bedrooms,
      builtYear: item.specification.builtYear,
      condition: item.specification.condition,
      floors: item.specification.floors,
      furniture: item.specification.furniture,
      wcs: item.specification.wcs,
      },
    landDetails: {
      area: item.landDetails.area,
      landscapeKind: item.landDetails.landscapeKind,
      },
    image: `https://images.jqestate.ru/${item.images[0].id}-jqestate-1024`,
    author: '',
    phone: '',
  }
);

export let clearState = () => (
  {
    type: CLEAR_STATE,
  }
)
