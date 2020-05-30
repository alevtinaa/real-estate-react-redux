import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default () => {
  return (
    <div className='navbar'>

    <img src='https://getdrawings.com/free-icon/red-house-icon-55.png'></img>

    <NavLink to='/sell' className='item' activeClassName='active'>Продажа</NavLink>
    <NavLink to='/rent' className='item' activeClassName='active'>Аренда</NavLink>
    <NavLink to='/cities' className='item' activeClassName='active'>Поселки</NavLink>
    <NavLink to='/about' className='item' activeClassName='active'>О компании</NavLink>

    <span className='phonenumber'>+ 00 (000) 000 - 00 - 00</span>

    <button to='/callback'>Заказать звонок</button>

    </div>
  )
};
