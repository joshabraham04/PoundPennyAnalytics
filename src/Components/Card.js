import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const STYLES = ['learning'];

const SIZES = ['btn--medium', 'btn--large'];

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
    <Link to={to} className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
}

export default Card;