import React from 'react';
import { createStore } from 'redux';

let initialState = {};

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case '':
      return {...state};
    default:
      return {...state};
    };
  };

export default createStore(reducer);
