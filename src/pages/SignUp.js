import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Form from '../shared/Form';
import Button from '../shared/Button';
import Action from '../shared/Action';
import axios from 'axios';

export default function SignUp(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const history = useHistory();
    
    function verifyInputs(){
        setIsDisabled(true);
        if(!name || !email || !password || !confirmPassword){
            alert('Preencha todos os campos');
            setIsDisabled(false);
        }
        else{
            const request = axios.post('http://localhost:3000/api/sign-up', {name, email, password,     confirmPassword});
            request.then(() => history.push('/sign-in')).catch(error => {
                alert(error.response.data.error);
                setIsDisabled(false);
            });
        }
    }

    return (
        <>
            <h1>MyWallet</h1>
            <Form onSubmit = {e => e.preventDefault()}>
                <input type = 'text' placeholder = 'Nome' 
                    onChange = {e => setName(e.target.value)}
                    value = {name}
                />
                <input type = 'email' placeholder = 'E-mail' 
                    onChange = {e => setEmail(e.target.value)}
                    value = {email}
                />
                <input type = 'password' placeholder = 'Senha' 
                    onChange = {e => setPassword(e.target.value)}
                    value = {password}
                />
                <input type = 'password' placeholder = 'Confirme a senha' 
                    onChange = {e => setConfirmPassword(e.target.value)}
                    value = {confirmPassword}
                />
            </Form>
            <Button type = 'submit' onClick={verifyInputs} disabled = {isDisabled}>Cadastrar</Button>
            <Link to = '/sign-in'>
                <Action>Já tem uma conta? Entre agora!</Action>
            </Link>
        </>

    )
}





