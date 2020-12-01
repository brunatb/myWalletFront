import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../shared/Form';
import Button from '../shared/Button';
import Action from '../shared/Action';

export default function SignUp(){
    return (
        <>
            <h1>MyWallet</h1>
            <Form>
                <input type = 'text' placeholder = 'Nome' />
                <input type = 'email' placeholder = 'E-mail' />
                <input type = 'password' placeholder = 'Senha' />
                <input type = 'password' placeholder = 'Confirme a senha' />
            </Form>
            <Button type = 'submit'>Cadastrar</Button>
            <Link to = '/sign-in'>
                <Action>Já tem uma conta? Entre agora!</Action>
            </Link>
        </>

    )
}





