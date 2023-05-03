import React from 'react';
import './Textbox.css';


function Textbox(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      className="textbox"
    />
  );
}

export default Textbox;