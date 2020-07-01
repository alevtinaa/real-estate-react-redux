import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  setItem,
  clearState
  } from './store/actions';
import Navbar from './components/Navbar/Navbar';
import Items from './components/Items/Items';
import About from './components/About/About';

let App = (props) => {
  return (
    <div className='App'>
      <Navbar
        />

      <Route
        path='/sale'
        render={
          () => <Items
            type='sale'
            items={props.items}
            setItem={props.setItem}
            />
              }
              />
      <Route
        path='/rent'
        render={
          () => <Items
            type='rent'
            items={props.items}
            setItem={props.setItem}
            />
              }
              />
      <Route
        path='/about'
        render={
          () => <About
            items={props.items}
            />
              }
              />
    </div>
  );
};

let mapStateToProps = (state) => (
  {
    items: state,
  }
);

export default connect(mapStateToProps,
    {
      setItem,
      clearState
    }
  )(App);
