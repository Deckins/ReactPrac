import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput.js';
import UserInput from './UserInput/UserInput.js';
import './App.css';

class App extends Component {
  state = {
    persons: [
     {name: 'Daniel',age: 14,},
     {name: 'Smith', age: 20},
     {name: 'Snitch', age: 69}
    ],
    name: "state",
    showPersons: false
  };

  nameHandler = (event) => {
    this.setState({ name: event.target.value })
    console.log(this.state.persons)
  }
  toggleHandler = () => {
    const currentShow = this.state.showPersons
    this.setState({ showPersons: !currentShow })
  }
   
  
  render() {
    let people = null;

    if(this.state.showPersons){
     people = (
     <div>
     <UserInput name={this.state.name} nameChanger={this.nameHandler} />
      {/* <UserOutput name={this.state.name} /> */}
      {this.state.persons.map(person => {
        return (
        <div>
          
          <UserOutput name={person.name} age={person.age} />
        </div>
        )
      })}
    </div> 
     )
    }
    return (

      <div>
        <div>{this.state.name}</div>
        <button onClick={this.toggleHandler}>Toggle People</button>
        {/* {this.state.showPersons === true ? */}
          {people}
          {/* : null */}
        {/* } */}
        
      </div>

    );
  }
}

export default App;
