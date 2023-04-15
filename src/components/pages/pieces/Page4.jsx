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
      font-weight: 450;
      margin-bottom: 8px;
      text-align: left;
      color: #410F70;
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
      font-weight: 300;
      margin-bottom: 4px;
      text-align: left;
      color: #410F70;
      font-family: Inter;
      position: relative;
      left: 3%;
      padding-top: 100px;
    `;
  
    const Image = styled.img`
      width: 500px;
    `;
  
    const ContentWrapper = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
    `;
  
    const InfoWrapper = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 65%;
      margin-right: 50px;
    `;
  
    return (
    <div>
        <div style={{ display: "flex", backgroundColor: "#FFFFFF", paddingTop: "50px", paddingBotom: "70px"}}>
            <ContentWrapper>
            <div>
                <Image src={require("./pieceImages/laptop.png")} alt="laptopImg" />
            </div>
            <InfoWrapper>
                <Title>
                {TextWithColoredWords("Let us to invest back  into you. Let yourself invest back into you", [
                    "us", "you", "yourself"
                ])}
                </Title>
                <Text>Our investment and financial literacy resources allow you know more about your money. From home economics to day trading, we put you one step closer to financial freedom.</Text>
            </InfoWrapper>
            </ContentWrapper>
        </div>

        <div style={{margin: "50px 0px 50px 0px", paddingLeft: "55%"}}>
            <Button backgroundColor="transparent" border="5px solid #E43FFF" padding="10px 40px" borderRadius = "16px" textColor= "#410F70" text="Learn More" fontSize = "1.7rem"></Button>
        </div>  
    </div>
    );
  }
  
  export default Page3;
  