import React, { useEffect, useRef, useCallback, useContext } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

    const toggleButtonRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        const timer = setTimeout(() => console.log('Sending HTTP request....'), 1000);
        toggleButtonRef.current.click();
        return () => {console.log('[Cockpit.js] cleanup'); clearTimeout(timer);}
    }, []);
    
    useEffect(() => {
        console.log('[Cockpit.js] 2 useEffect');
        return () => console.log('[Cockpit.js] 2 cleanup');
    });

    const assignedClasses = []
    let btnClass = '';
    if (props.showPeople) {
        btnClass = classes.Red;
    }

    if (props.peopleLength <= 2) assignedClasses.push(classes.red);
    if (props.peopleLength <= 1) assignedClasses.push(classes.bold);
    return (
        <div className={classes.Cockpit}>
          <h1> { props.title } </h1>
          <p className={assignedClasses.join(' ')}>Is this really working?</p>

          <button
            ref={toggleButtonRef}
            className={btnClass}
            onClick={props.clickedBtn}>
                 Toggle people
          </button>
             <button
              onClick={authContext.login}>
                Log in
          </button>
        </div>
    );
}

export default React.memo(Cockpit);