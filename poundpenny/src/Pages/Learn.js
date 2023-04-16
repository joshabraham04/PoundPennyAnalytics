import React, { useState, useEffect } from 'react';
import Button from '../Components/Button';
import './Learn.css';



function Learn(){
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
        <div className='info'>
            <header className='lheader'>Let us to invest back  into you.<br/>Let yourself invest back into you.</header>
            <p className='para'>Our investment and financial literacy resources
                allow you know more about your money. From 
                home economics to day trading, we put you
                one step closer to financial freedom.</p>
            {button && <Button buttonStyle='btn--nav'to='/Lessons'>Get Started</Button>}
            
        </div>

    );

}
export default Learn;
