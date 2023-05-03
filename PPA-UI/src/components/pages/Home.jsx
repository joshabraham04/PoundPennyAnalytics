import React from "react";
import Navbar from "./pieces/Navbar";
import Page from "./pieces/Page";
import Page1 from "./pieces/Page1";
import Page2 from "./pieces/Page2";
import Page3 from "./pieces/Page3";
import Page4 from "./pieces/Page4";
import Page5 from "./pieces/Page5";

import { Link } from "react-router-dom";
  
const Home = () => {
  var subText = ["Buy a stock you believe in," , "trade in a way you believe in," , "and so much more"];
  return (
    <div>
        <Navbar/>
        <Page1 
        backgroundColor = "#7700FF" 
        mainText="Learn and grow with your money"
        subText = {subText}
        buttonText = "Get Started"
        textColor = "#ffffff"
        imagesrc= "./pieceImages/ppaBG.png"/>
        <Page2
        backgroundColor = "#9829FF"/>
        <Page3/>
        <Page4
        backgroundColor = "#FFFFFF"/>
        <Page5
        backgroundColor = "#E43FFF"/>
        
    </div>
  );
};
  
export default Home;