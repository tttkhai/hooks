import React, {useContext} from 'react'
import { UseContext } from './UseContext';

function About() {
    const { user, setUser } = useContext(UseContext);
    return (
      <div>
        About page
        <div> user: {user.id?<>{user.first} {user.last}</>: <div>Need to login</div>}</div>
      </div>
    );
}

export default About
