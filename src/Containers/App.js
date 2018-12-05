import React, { Component } from 'react';
import Persons from '../Components/Persons/Persons';
import classes from './App.css';

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

    let btnClass =''
    if(this.state.showPersons){
     people = (
     <div>
      <Persons 
        persons={this.state.persons}
        nameChanger={this.nameHandler}
        deleteClick={this.deleteHandler}/>
    </div> 
     )
     btnClass = classes.Red;
    }

    const assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push('red');
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push('bold'); 
    }

    
    
    return (
    
      
        <div className= {classes.App}>

          <div>{this.state.prompt}</div>
          <p className={assignedClasses.join(' ')}>Hey Guys</p>
          <button className={btnClass} onClick={this.toggleHandler}>Toggle People</button>
          {/* {this.state.showPersons === true ? */}
          {people}
          {/* : null */}
          {/* } */}

        </div>
        

    );
  }
}

export default App;
