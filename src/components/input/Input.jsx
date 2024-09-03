import React, { useEffect, useState } from 'react';
import './Input.css'; // Assuming your CSS is in this file

const Input = ({ id, classN, type, labelN, placeholder, value, setValue }) => {

  const [isFocused, setIsFocused] = useState(false);
    useEffect(()=>{
        if(value !== null && value !== undefined && value !== ''){
            setIsFocused(false)
        }else{
            setIsFocused(true)
        }
    },[value])
    
  return (
    <div className={`inputbox ${!isFocused ? 'focusedInputbox' : ''}`}>
      <label htmlFor={id}>{labelN}</label>
      <input
        id={id}
        className={classN}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default Input;
