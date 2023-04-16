import React, { useState, useEffect } from 'react';
import './LogIn.css';
import Button from '../Components/Button';
import Textbox from '../Components/Textbox';

function LogIn() {
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

  //TEXTBOX STUFF
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // handle login logic here
  }
  return( 
    <div className='login'>
      <h1 className='head'>Welcome back!</h1>
      <p className='para'>Let's get you back to your finances.</p>
      <div className='email'>
        <label>E-mail address</label>
        <Textbox type="email" value= {username} onChange= {handleUsernameChange}/>
        </div>
        <div className='pass'>
        <label> Password</label>
        <Textbox type="password" value= {password} onChange= {handlePasswordChange}/>
        </div>
        {button && <Button buttonStyle='btn--nav'to='/Home'>Log in</Button>}

  </div>
  );

}
export default LogIn;