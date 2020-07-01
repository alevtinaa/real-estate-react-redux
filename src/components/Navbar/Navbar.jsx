import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default () => {
  return (
    <div className='navbar'>

    <img
      alt=''
      src='https://getdrawings.com/free-icon/red-house-icon-55.png'
      >
      </img>

    <NavLink
      to='/sale'
      className='nav-item'
      activeClassName='active'
      >
      Продажа
      </NavLink>
    <NavLink
      to='/rent'
      className='nav-item'
      activeClassName='active'
      >
      Аренда
      </NavLink>
    <NavLink
      to='/about'
      className='nav-item'
      activeClassName='active'
      >
      О компании
      </NavLink>

    <span
      className='phonenumber'
      >
      + 00 (000) 000 - 00 - 00
      </span>

    <button
      to='/callback'
      >
      Заказать звонок
      </button>

    </div>
  )
};
