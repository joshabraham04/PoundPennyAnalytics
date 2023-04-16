import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Card from '../Components/Card';
import './Lessons.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


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

  //Slider
  const settings = {
    dots: true,
    dotsClass: 'slick-dots horizontal-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1

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
    <Modal className='pop' isOpen={isOpen} onRequestClose={toggleModal}>
      <h2 tyle={{ marginBottom: '30px' }}>Investing 101</h2>
      <Slider {...settings} className='slider'>
        <div>
          <img className='slide' src ='../assets/Lesson1/Copy of Presentation 1.jpg' alt= 'slide 1'/>
        </div>
        <div>
          <img className='slide' src ='../assets/Lesson1/Copy of Presentation 1(1).jpg' style={{ width: '50%', height: 'auto' }}/>
        </div>
        <div>
          <img className='slide' src ='../assets/Lesson1/Copy of Presentation 1(2).jpg' style={{ width: '50%', height: 'auto' }}/>
        </div>
      </Slider>
      <button className='exit' onClick={toggleModal}>Exit Lesson</button>
      </Modal>
    </>
  );


}
export default Lessons;