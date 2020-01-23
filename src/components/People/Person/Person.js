import React, { Component } from 'react';
import classes from './Person.module.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';




class Person extends Component  {
  render() {
    console.log('[Person.js] rendering...')
    return (
      <Aux>
        <p onClick={this.props.deletePerson} >I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changeName} value={this.props.name}/>>
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  changed: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
};

export default withClass(Person, classes.Person);
