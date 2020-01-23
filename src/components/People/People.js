import React, { Component } from 'react';
import Person from './Person/Person';

class People extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[People.js] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[People.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[People.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[People.js] componentDidUpdate', snapshot.message)
    }

    render() {
        console.log('[People.js] rendering...');
        return this.props.people.map((person, index) => {
            return <Person 
            key={index} 
            deletePerson={() => this.props.clicked(index)} 
            name={person.name} 
            age={person.age}
            changeName={(event) => this.props.changed(event, index)}></Person>
        });
    }
}
export default People;