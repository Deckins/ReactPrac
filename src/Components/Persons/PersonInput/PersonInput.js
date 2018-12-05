import React from 'react';

const PersonInput = (props) => {
    const inlineStyle ={
        border: '2px solid red'
    }
    return <input type="text"  style={inlineStyle}
    onChange={props.nameChanger}  />

}

export default PersonInput;