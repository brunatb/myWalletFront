import { createContext } from 'react';
import React, { useState} from 'react';

const UserContext = createContext();

export default UserContext;

export function UserProvider(props){
    const [user, setUser] = useState({id: 1, name: "Bruna", token: "d57a3073-030d-4405-9cf9-25cdba6d4c72"});
    
    return(
        <UserContext.Provider value={{user, setUser}}>
            {props.children}
        </UserContext.Provider>
    )
}
