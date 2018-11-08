import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
   return (
   <div className="UserOutput">
        <div>
            <h1>Paragraph 1</h1>
            <p>Written by {props.name}</p>
        </div>
        <div>
            <h1>Paragraph 2</h1>
            <p>Age {props.age}</p>
        </div>
    </div>
   )
}

export default UserOutput;
