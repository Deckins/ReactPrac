import React from 'react';
import PersonInput from '../PersonInput/PersonInput';
import classes from './Person.css';

const Person = (props) => {
   
    
   return (
   <div className={classes.Person}>
        <div>
            
            {/* The html handles the onClick event keyword */}
            <p> Written by {props.name}</p>
            <p onClick={props.deleteChanger}>Delete Me!</p>
            <PersonInput nameChanger={props.nameChanger} name={props.name}/>
        </div>
        <div>
            
            <p>Age {props.age}</p>
        </div>
    </div>
   )
}

export default Person;
