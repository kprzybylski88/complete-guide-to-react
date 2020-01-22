import React, {Component} from 'react';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit'
import classes from './App.module.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    // older apps initialize state here
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
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
    showPeople: true,
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
    this.setState({people: people});
  }

  render() {
    console.log('[App.js] render')
    let people = null;

    if (this.state.showPeople) {
      people = <People people={this.state.people} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} />;
    }

    return (      
        <div className={classes.App}>
          <Cockpit title={this.props.appTitle} clickedBtn={this.togglePeople} showPeople={this.state.showPeople} people={this.state.people} />
          {people}
        </div>
    );
  }
}

export default App;
