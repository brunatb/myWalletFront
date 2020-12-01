import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../shared/Form';
import Button from '../shared/Button';
import Action from '../shared/Action';

export default function SignIn(){
    return (
        <>
            <h1>MyWallet</h1>
            <Form>
                <input type = 'email' placeholder = 'E-mail' />
                <input type = 'password' placeholder = 'Senha' />
            </Form>
            <Button type = 'submit'>Entrar</Button>
            <Link to = '/sign-up'>
                <Action>Primeira vez? Cadastre-se!</Action>
            </Link>
        </>

    )
}





