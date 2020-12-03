import React, {useContext, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import Form from '../shared/Form';
import Button from '../shared/Button';
import Action from '../shared/Action';
import UserContext from '../contexts/UserContext';

export default function SignIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const { setUser } = useContext(UserContext);
    const history = useHistory();

    function verifyInputs(){
        setIsDisabled(true);
        if(!email || !password){
            alert('Preencha todos os campos');
            setIsDisabled(false);
        }
        else{
            const request = axios.post('http://localhost:3000/api/sign-in', { email, password });
            request.then(response => {
                setUser(response.data);
                history.push('/');
            })
            .catch(error => {
                alert(error.response.data.error);
                setIsDisabled(false);
            });
        }
    }

    return (
        <>
            <h1>MyWallet</h1>
            <Form onSubmit = {e => e.preventDefault()}>
                <input type = 'email' placeholder = 'E-mail' 
                    onChange = {e => setEmail(e.target.value)}
                    value = {email}
                />
                <input type = 'password' placeholder = 'Senha' 
                    onChange = {e => setPassword(e.target.value)}
                    value = {password}
                />
            </Form>
            <Button type = 'submit' onClick={verifyInputs} disabled = {isDisabled}>Entrar</Button>
            <Link to = '/sign-up'>
                <Action>Primeira vez? Cadastre-se!</Action>
            </Link>
        </>

    )
}





