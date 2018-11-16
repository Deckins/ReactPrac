import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
   return (
   <div className="UserOutput">
        <div>
            <h1>Paragraph 1</h1>
            {/* The html handles the onClick event keyword */}
            <p> Written by {props.name}</p>
            <button className="deleteButton" onClick={props.deleteChanger}>Delete Me!</button>
        </div>
        <div>
            <h1>Paragraph 2</h1>
            <p>Age {props.age}</p>
        </div>
    </div>
   )
}

export default UserOutput;
