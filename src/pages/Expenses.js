import React from 'react';
import Wrapper from '../shared/Wrapper';
import Button from '../shared/Button';
import Form from '../shared/Form';

export default function Expenses(){

    return(
        <Wrapper>
            <p>Nova saída</p>
            <Form>
                <input type = 'number' placeholder = "Valor"
                
                />
                <input type = 'text' placeholder = "Descrição"
                
                />
            </Form>
            <Button>Salvar saída</Button>
        </Wrapper>
    )
}

