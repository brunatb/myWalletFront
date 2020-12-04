import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import styled from 'styled-components';
import TransactionInput from './components/TransactionInput';
import { UserProvider } from './contexts/UserContext';
import Home from './pages/Home';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default function App(){
    return(
        <Router>
            <UserProvider>
                <Main>
                    <Switch>
                        <Route path = '/sign-up'>
                            <SignUp />   
                        </Route>
                        <Route path = '/sign-in'>
                            <SignIn />
                        </Route>
                        <Route path = '/earns'>
                            <TransactionInput />
                        </Route>
                        <Route path = '/expenses'>
                            <TransactionInput />
                        </Route>
                        <Route path = '/'>
                            <Home />
                        </Route>
                    </Switch>
                </Main>
            </UserProvider>
        </Router>
       
    )
}

const Main = styled.main`
    width: 100vw;
    min-height: 100vh;
    font-family: 'Raleway', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #9054be;
    
    h1{
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        color: white;
    }
    
`;