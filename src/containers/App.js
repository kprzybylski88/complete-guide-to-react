import React, {Component} from 'react';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit'
import classes from './App.module.css';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';

class App extends Component {
  
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    // older apps initialize state here
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponent Update', {...this.state},{...nextState});
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStatFromProps', props);
    return state;
  }

  state = {
    people: [
      { name: 'KMP', age: 31 },
      { name: 'Jane', age: 23 },
      { name: 'Niji', age: 30 },
    ],
    showPeople: false,
    showCockpit: true,
    keystrokeCounter: 0,
  }
  togglePeople = () => {
    const doesShow = this.state.showPeople;
    this.setState({
      showPeople: !doesShow
    });
  }

  toggleCockpit = () => {
    const doesShow = this.state.showCockpit;
    this.setState({
      showCockpit: !doesShow,
    });
  }

  nameChangedHandler = (event, index) => {
    const people = [...this.state.people];
    people[index] =  {...people[index], name: event.target.value};
    this.setState((prevState, props) => {
      return {
        people: people,
        keystrokeCounter: ++prevState.keystrokeCounter
      }
    });
  }

  deletePersonHandler = (index) => {
    const people = [ ...this.state.people ];
    people.splice(index, 1);
    this.setState({people: people});
  }

  render() {
    console.log('[App.js] rendering...')
    let people = null;
    let cockpit = null;
    if (this.state.showCockpit) {
      cockpit = <Cockpit title={this.props.appTitle} clickedBtn={this.togglePeople} showPeople={this.state.showPeople} peopleLength={this.state.people.length} />;
    }
    if (this.state.showPeople) {
      people = <People people={this.state.people} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} />;
    }


    return (
        <Aux>
          <button onClick={this.toggleCockpit}>Remove Cockpit {this.state.keystrokeCounter}</button>
          {cockpit}
          {people}
        </Aux>
    );
  }
}

export default withClass(App, classes.App);
