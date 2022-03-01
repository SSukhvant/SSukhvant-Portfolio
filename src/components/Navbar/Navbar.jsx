import React from 'react';
import './Navbar.scss';
import { images } from '../../constants';

const Navbar = () => {
  return (
  <nav>
   <div>
    {/*<img src={images.logo} alt="logo" />*/}
    <h2 className="logo">Sukhvant Singh</h2>
   </div>
  </nav>
  )
}

export default Navbar;
