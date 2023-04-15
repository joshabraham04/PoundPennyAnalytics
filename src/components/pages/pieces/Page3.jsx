import React from "react";
import Button from "../pieces/Button";
import Card from "../pieces/Card";
import styled from 'styled-components';


function Page3(props) {
    const TextWithColoredWords = (text, coloredWords) => {
      const getTextWithColoredWords = () => {
        const words = text.split(" ");
  
        return words.map((word, index) => {
          if (coloredWords.includes(word)) {
            return (
              <span key={index} style={{ color: "#EFBF00" }}>
                {word}{" "}
              </span>
            );
          }
          return <span key={index}>{word} </span>;
        });
      };
  
      return getTextWithColoredWords();
    };
  
    const Title = styled.h1`
      font-size: 72px;
      font-weight: 550;
      margin-bottom: 8px;
      text-align: left;
      color: white;
      font-family: Inter;
      position: relative;
      left: 3%;
      width: "35%
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    `;

    const Text = styled.p`
        font-size: 30px;
        font-weight: 400;
        margin-bottom: 4px;
        text-align: left;
        color: white;
        font-family: Inter;
        position: relative;
        left: 3%;
        padding-top: 100px;
    `;

    const Image = styled.img`
        top: -70%;
        left: 60%;
    `;
  
    return (
          <div style={{ display: "flex", backgroundColor: "#A800FF", paddingTop: "50px", paddingBotom: "50px"}}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", width: "65%" }}>
                <Title>Invest, trade, and profit</Title>
                <Title>
                  {TextWithColoredWords("with knowledge and", [
                    "knowledge",
                  ])}
                </Title>
                <Title>
                  {TextWithColoredWords("confidence", [
                    "confidence",
                  ])}
                </Title>
                <Text>Our platform allows investment analysis with minimal fees and commissions. Focus on your money and its growth.</Text>
                <div style={{marginTop: "20px" ,paddingLeft:"30%", margin: "50px 0px 50px 0px"}}>
                  <Button backgroundColor="transparent" border="5px solid #EFBF00" padding="10px 40px" borderRadius = "16px" textColor= "#ffffff" text="Learn More" fontSize = "1.7rem"></Button>
                </div>
            </div>
        <div>
          <Image src={require("./pieceImages/pound-sterling.png")} alt="poundImg" />
        </div>

      </div>
    );
  }
  
  export default Page3;
  