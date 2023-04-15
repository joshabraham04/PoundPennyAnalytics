import logo from './logo.svg';
import './App.css';
import React, {Fragment} from 'react';

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
}  from "react-router-dom";

import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import SignUpDone from "./components/pages/SignUpDone";

function App() {
  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;
