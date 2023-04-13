import React, { useState, useEffect } from 'react';
import './SignUp.css';
import Button from '../Components/Button';

function SignUp() {
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
    <div>
    <div className='signup'>
      <h1 className='header'>
        Sign up is as easy as<br/> 1, 2, 3!
        </h1>
      <p className='para'> Just provide your information in the boxes to the right
          and you'll get an e-mail to help you get started.
      </p>
  </div>
  <div className='creds'>
  {button && <Button buttonStyle='btn--primary'to='/SignUp'>Sign Up</Button>}

  </div>
  </div>
  
  );

}
export default SignUp;