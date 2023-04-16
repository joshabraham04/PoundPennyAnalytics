import React, { useState, useEffect } from 'react';
import Button from '../Components/Button';
import './WhyPPA.css';


function WhyPPA() {

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
      <div className = "WhyPPA">
    <div class="container">
  <div class="panel">
    <img src="https://static.vecteezy.com/system/resources/previews/004/548/869/original/income-increase-financial-strategy-gold-coins-icon-sign-business-finance-money-concept-illustration-free-vector.jpg" alt="your-image"></img>
    <h2>Growth and Money</h2>
    <p>Invest in all sorts of industries. Trade short or long term. Use data to make better choices. </p>
  </div>
  <div class="panel">
    <img src="https://cdn1.iconfinder.com/data/icons/investment-95/512/N_T_583Artboard_1_copy_13-512.png" alt="your-image"></img>
    <h2>Financial Literacy</h2>
    <p>Learn about how to manage all kinds of income and assets. Accomplish your goals on your terms.</p>
  </div>
  <div class="panel">
    <img src="data:image/png;base64,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" alt="your-image"></img>
    <h2>Security</h2>
    <p>We protect all of your data. We do not sell it or let others misuse it. We only use it to make recommendations.</p>
  </div>
</div>

  </div>
  );
}

export default WhyPPA;