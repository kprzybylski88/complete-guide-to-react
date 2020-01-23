import React, { Component } from 'react';
import styled from 'styled-components';
import classes from './Person.module.css';
import Aux from '../../../hoc/Auxiliary';


const StyledDiv = styled.div`
width: 60%;
margin: 16px auto;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
text-align: center;
@media (min-width: 500px) {
  width: 450px;
}
`;

class Person extends Component  {
  render() {
    console.log('[Person.js] rendering...')
    return (
      <Aux>
      <div className={classes.Person}>
        <p onClick={this.props.deletePerson} >I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changeName} value={this.props.name}/>
      </div>
      </Aux>
    );
  }
}

export default Person;
