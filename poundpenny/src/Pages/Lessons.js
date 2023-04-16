import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
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

  //POP UPS
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  

  return(
    <>
    <div className='lesson'>
    <div className='proj'>
    <h2> Courses in Progress</h2>
        {button && <Card buttonStyle='crd--primary'>Investing 101</Card>}
        {button && <Card buttonStyle='crd--primary'>Budgeting your income</Card>}
    </div>
    <div className = 'homeec'>
      <h2>Home Economics</h2>
    {button && <Card buttonStyle='crd--primary' onClick={toggleModal}>Understanding your financials</Card>}
    {button && <Card buttonStyle='crd--primary' onClick={toggleModal}>Budgeting your income</Card>}
    </div>
    <div className='daytrade'>
      <h2>Day Trading Strategies</h2>
      {button && <Card buttonStyle='crd--primary' onClick={toggleModal}>Investing 101</Card>}
      {button && <Card buttonStyle='crd--primary' onClick={toggleModal}>Calculated Risk</Card>}
      {button && <Card buttonStyle='crd--primary' onClick={toggleModal}>Basic Crypto</Card>}
    </div>
    </div>
    <Modal isOpen={isOpen} onRequestClose={toggleModal}>
      <h2>Modal Title</h2>
      <p>Modal Content</p>
      <button onClick={toggleModal}>End Lesson</button>
      </Modal>
    </>
  );


}
export default Lessons;