import React, { useState, useEffect } from 'react';
import Button from '../Components/Button';
import './Invest.css';


function Invest() {

    //BUTTON STUFF
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

  return( 
  <div className = 'invest'>
  <header className='invest'>Invest, trade, and profit<br/>with knowledge and <br/> confidence</header>
  <p className='details'> Our platfrom allows investment analysis with minimal fees and commisions. Focus on your money and its growth</p>
  {button && <Button buttonStyle='btn--nav'to='/Construction'>Learn More</Button>}

  </div>
  );
}

export default Invest;