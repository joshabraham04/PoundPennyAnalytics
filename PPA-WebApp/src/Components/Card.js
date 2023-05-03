import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const STYLES = ['learning'];

const SIZES = ['crd--medium', 'crd--large'];

 const Card = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  to
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={to} className='crd-mobile'>
      <button
        className={`crd ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
}

export default Card;