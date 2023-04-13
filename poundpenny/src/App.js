import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import Invest from './Pages/Invest';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/SignUp' component={SignUp} />
          <Route path= '/Invest' component= {Invest} />
        </Routes>
      </Router>
    </>
  );
}

export default App;