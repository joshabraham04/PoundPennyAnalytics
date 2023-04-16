import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import './Lessons.css';

function Lessons(){
    
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
    <div className='test'>
        {button && <Card buttonStyle='btn--primary'to='/Almost'>TEST CARD</Card>}
        {button && <Card buttonStyle='btn--primary'to='/Almost'>TEST CARD TOO</Card>}
    </div>
  );


}
export default Lessons;