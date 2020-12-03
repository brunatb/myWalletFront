import React, { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import axios from 'axios';

import Wrapper from '../shared/Wrapper';
import Button from '../shared/Button';
import Form from '../shared/Form';
import { useHistory } from 'react-router-dom';

export default function Earns(){
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const { user, setUser } = useContext(UserContext);
    const history = useHistory();

    function validateInputs(){
        setIsDisabled(true);
        if(!value || !description){
            alert("Preencha todos os campos!");
            setIsDisabled(false);
        }else{
            const treatedValue = parseFloat(value.replace(',', '.'));
            const request = axios.post('http://localhost:3000/api/transactions', {value: treatedValue, description}, {headers: { Authorization: `Bearer ${user.token}`}});
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

    return(
        <Wrapper>
            <p>Nova entrada</p>
            <Form onSubmit = {e => e.preventDefault()}>
                <input type = 'text' step = "0.01" min = "0.01" placeholder = "Valor"
                    value = {value}
                    onChange = {e => {
                        setValue(e.target.value);
                    }}
                />
                <input type = 'text' placeholder = "Descrição"
                    value = {description}
                    onChange = {e => setDescription(e.target.value)}
                />
            </Form>
            <Button type ='submit' onClick = {validateInputs} disabled = {isDisabled}>Salvar entrada</Button>
        </Wrapper>
    )
}
