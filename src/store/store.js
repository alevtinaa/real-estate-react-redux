import React from 'react';
import { createStore } from 'redux';
import { omit } from 'lodash';

let initialState = [];

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ITEM':
      let data = omit(action, 'type');
      return [...state, {...data}];
    case 'CLEAR_STATE':
      return initialState;
    default:
      return [...state];
    };
  };

export default createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()
);
