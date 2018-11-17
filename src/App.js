import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput.js';
import './App.css';

class App extends Component {
  state = {
    persons: [
     {id:'1dawd',name: 'Daniel',age: 14,},
     {id:'2daw3',name: 'Smith', age: 20},
     {id:'4ffwaf2',name: 'Snitch', age: 69}
    ],
    prompt: "Enter New Name",
    showPersons: false
  };

  nameHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(person =>{
        return person.id === id
    })
    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({persons:persons})

  }
  toggleHandler = () => {
    const currentShow = this.state.showPersons
    this.setState({ showPersons: !currentShow })
  }
  deleteHandler = (index) => {
    const persons = [...this.state.persons] //spread operator allocate each element to the persons ref.
    persons.splice(index,1) //Removies the 1 element at the index
    this.setState({persons:persons})
  }
   
  
  render() {
    let people = null;

    if(this.state.showPersons){
     people = (
     <div>
      {/* <UserOutput name={this.state.name} /> */}
      {this.state.persons.map((person,index) => {
        return (
          <UserOutput deleteChanger = {() => this.deleteHandler(index)}
            nameChanger={(event) => this.nameHandler(event,person.id)}
            name={person.name} age={person.age} key={person.id} />
        )
      })}
    </div> 
     )
    }
    return (

      <div>
        <div>{this.state.prompt}</div>
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
