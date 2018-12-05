import React from 'react';
import Person from './Person/Person';

const Persons = (props) => (
    props.persons.map((person,index) => {
        
          return <Person 
            deleteChanger = {() => props.deleteClick(index)}
            nameChanger = {(event) => props.nameChanger(event,person.id)}
            name={person.name} age={person.age} key={person.id} />
        
      })
);

export default Persons;