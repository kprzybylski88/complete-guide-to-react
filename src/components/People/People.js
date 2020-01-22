import React from 'react';
import Person from './Person/Person';

const People = (props) => {
    console.log('[People.js] rendering...');
    return props.people.map((person, index) => {
        return <Person 
          key={index} 
          deletePerson={() => props.clicked(index)} 
          name={person.name} 
          age={person.age}
          changeName={(event) => props.changed(event, index)}></Person>
        });
}
export default People;