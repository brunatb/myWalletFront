import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

export default function Home(){
    const { user } = useContext(UserContext);
    const history = useHistory();
    console.log(user);
    if(user === null){
        history.push('/sign-in');
    }

    return (
        <h1>Oi</h1>
    )
}