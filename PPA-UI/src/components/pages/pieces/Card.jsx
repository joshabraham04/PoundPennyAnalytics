import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const basePath = "/src/components/pages/pieces/pieceImages/";
const CardWrapper = styled.div`

  background-color: ${props => props.cardColor};
  border-radius: 24px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
`;

const CardTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 8px;
  text-align: center;
  color: white;
`;

const CardBody = styled.p`
  font-size: 24px;
  margin-bottom: 16px;
  color: white;
`;

const CardImage = styled.img`
  width: 40%;
  height: auto;
  vertical-align: middle;
`;

function Card(props) {

  var path = ""
  if (props.imagesrc == '0'){
    path = "./pieceImages/profit.png";
  }
  else if (props.imagesrc == '1'){
    path = "./pieceImages/book.png";
  }
  else if (props.imagesrc == '2'){
    path = "./pieceImages/cyber-security.png";
  }
  return (
    <CardWrapper style={{color: props.cardColor}}>
      <div style={{ textAlign: 'center' }}>
        <CardImage src={require(`${path}`)}></CardImage>
      </div>
      <CardTitle>{props.title}</CardTitle>
      <CardBody>{props.body}</CardBody>
    </CardWrapper>
  );
};

export default Card;