import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import './Main.css';

const Main = ({hiddenCart, toggleCart}) => {
  return (
    <div>
      <Header
        hiddenCart={hiddenCart}
        toggleCart={toggleCart}
      />
      <div className='main'>
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
