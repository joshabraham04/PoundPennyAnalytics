import React, { useState, useEffect } from 'react';
import Button from '../Components/Button';
import './WhyPPA.css';



function WhyPPA(){
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
    <>
        <header className='header'> We've go your back!</header>
        <div className='why'>

            <div className='grow'>
                <h3>Growth & Money</h3>
                <p>Invest in all sorts of industries. Trade short or long-term. Use data to make better choices</p>
            </div>
            <div className='financial'>
                <h3>Financial Literacy</h3>
                <p>Learn about how to manage all kinds of incomes and assets. Accomplish your goals on your terms.</p>
            </div>
            <div className= 'security'>
                <h3>Security</h3>
                <p> We protect all of your data. We do not sell it or let others misuse it. We only use it to make recommendations</p>
            </div>
        </div>
        </>

    );

}
export default WhyPPA;
