import React, {Component} from 'react';
import Person from '../components/People/Person/Person';
import styled from 'styled-components';
import classes from './App.module.css';

const StyledButton = styled.button`
  background-color: ${ props => props.alt ? 'red' : 'green' };
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color:  ${ props => props.alt ? 'salmon' : 'lightgreen' };
    color: black;
  }
`;

class App extends Component {
  state = {
    people: [
      { name: 'KMP', age: 31 },
      { name: 'Jane', age: 23 },
      { name: 'Niji', age: 30 },
    ],
    showPeople: false,
  }
  togglePeople = () => {
    const doesShow = this.state.showPeople;
    this.setState({
      showPeople: !doesShow
    })
  }

  nameChangedHandler = (event, index) => {
    const people = [...this.state.people];
    people[index] =  {...people[index], name: event.target.value};
    this.setState({
      people: people
    });
  }

  deletePersonHandler = (index) => {
    const people = [ ...this.state.people ];
    const a = people.splice(index, 1);
    console.log(a);
    this.setState({people: people});
  }

  render() {
    console.log(classes);
    let people = null;
    let BtnClass = '';

    let assignedClasses = [];

    if (this.state.people.length <= 2) assignedClasses.push(classes.red);
    if (this.state.people.length <= 1) assignedClasses.push(classes.bold);

      if (this.state.showPeople) {
        people = (
          <>
          {this.state.people.map((p, i) => {
          return <Person 
            key={i} 
            deletePerson={this.deletePersonHandler.bind(this, i)} 
            name={p.name} 
            age={p.age}
            changeName={(event) => this.nameChangedHandler(event, i)}></Person>
          })}
          </>
        );
        BtnClass = classes.Red;
        
      }
    return (      
        <div className={classes.App}>
          <h1>
            Hi, I am a react app
          </h1>
          <p className={assignedClasses.join(' ')}>Is this really working?</p>
          {/* () => this.switchNameHandler('Mels') is less efficient then 'bind' approach */}
          <button
          className={BtnClass}
          onClick={() => this.togglePeople()}>Toggle people</button>
          {people}
        </div>
    );
  }
}

export default App;
