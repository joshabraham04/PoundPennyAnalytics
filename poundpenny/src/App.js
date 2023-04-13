import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import Almost from './Pages/Almost';
import LogIn from './Pages/LogIn';
import Invest from './Pages/Invest';
import WhyPPA from './Pages/WhyPPA';

function App() {
  console.log('App component is rendering');
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'exact element={<Home/>} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Almost' element={<Almost />} />
          <Route path='/LogIn' element= {<LogIn />} />
          <Route path= '/Invest' element= {<Invest/>} />
          <Route path = '/WhyPPA' element={<WhyPPA/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;