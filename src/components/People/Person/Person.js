import React, { Component } from 'react';
import classes from './Person.module.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';




class Person extends Component  {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElement.current.focus();
    console.log(this.context);
  }
  inputElement;
  render() {
    console.log('[Person.js] rendering...')
    return (
      <Aux>
        {this.context.authenticated ? <p>isAuthenticated</p> :<p>isNotAuthenticated!</p>}
        <p onClick={this.props.deletePerson} >I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" ref={this.inputElement} onChange={this.props.changeName} value={this.props.name}/>>
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
