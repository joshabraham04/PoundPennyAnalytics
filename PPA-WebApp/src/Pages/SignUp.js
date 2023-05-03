import React, { useState, useEffect } from 'react';
import './SignUp.css';
import Button from '../Components/Button';
import Textbox from '../Components/Textbox';

function SignUp() {

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
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleFNChange(event) {
    setFirstName(event.target.value);
  }
  function handleLNChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // handle login logic here
  }

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
  <form onSubmit ={handleSubmit}>

 
    <div className='creds'>
      <div className='first'>
        <label > First Name</label>
        <Textbox type="firstname" value= {firstname} onChange= {handleFNChange}/>
        </div>
        <div className='last'>
        <label> Last Name</label>
        <Textbox type="lastname" value= {lastname} onChange= {handleLNChange}/>
        </div>
        <div className='email'>
        <label>E-mail address</label>
        <Textbox type="email" value= {username} onChange= {handleUsernameChange}/>
        </div>
        <div className='pass'>
        <label> Password</label>
        <Textbox type="password" value= {password} onChange= {handlePasswordChange}/>
        </div>
      {button && <Button buttonStyle='btn--primary'to='/Almost'>Sign Up</Button>}

  </div>
  </form>
  </div>
  
  );

}
export default SignUp;