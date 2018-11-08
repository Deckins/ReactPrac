import React from 'react';

const UserInput = (props) => {
    const inlineStyle ={
        border: '2px solid red'
    }
    return <input type="text"  style={inlineStyle}
    onChange={props.nameChanger} value={props.name} />

}

export default UserInput;