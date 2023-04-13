import React, { useState, useEffect } from 'react';
import './Home.css';
import Button from '../Components/Button';

function Home() {
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
    <div className = 'home'>
      <h1 className='header'>Learn and grow with your money</h1>
      <p className='para'> Buy a stock you believe in, trade in a way you believe in and so much more.</p>
      {button && <Button buttonStyle='btn--outline'to='/SignUp'>Get Started</Button>}
    </div>
  
  );
}
export default Home;