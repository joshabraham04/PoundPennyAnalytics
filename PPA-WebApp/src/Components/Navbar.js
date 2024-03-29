import React, { useState, useEffect } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/PPA-logo.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src ={logo} alt="Logo"/>
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
              <Link
                to='/WhyPPA' className='nav-links' onClick={closeMobileMenu}
              >
                Why PPA?
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Invest' className='nav-links' onClick={closeMobileMenu}>
                Invest
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Learn'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Learn
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/YouandMoney'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                You & Money
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--nav' to='/SignUp'>Sign Up</Button>}
          {button && <Button buttonStyle='btn--nav' to='/LogIn'>Log In</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;