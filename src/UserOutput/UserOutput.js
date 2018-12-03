import React from 'react';
import UserInput from '../UserInput/UserInput.js';
import Radium from 'radium';
import './UserOutput.css';

const UserOutput = (props) => {
    const style ={
        '@media (min-width: 500px)':{
            width: '450px'
        }
    }
   return (
   <div className="UserOutput" style={style}>
        <div>
            <h1>Paragraph 1</h1>
            {/* The html handles the onClick event keyword */}
            <p> Written by {props.name}</p>
            <button className="deleteButton" onClick={props.deleteChanger}>Delete Me!</button>
            <UserInput nameChanger={props.nameChanger} />
        </div>
        <div>
            <h1>Paragraph 2</h1>
            <p>Age {props.age}</p>
        </div>
    </div>
   )
}

export default Radium(UserOutput);
