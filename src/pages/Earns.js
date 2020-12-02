import React from 'react';
import Wrapper from '../shared/Wrapper';
import Button from '../shared/Button';
import Form from '../shared/Form';

export default function Earns(){

    return(
        <Wrapper>
            <p>Nova entrada</p>
            <Form>
                <input type = 'number' step = "0.01" min = "0.01" placeholder = "Valor"
                
                />
                <input type = 'text' placeholder = "Descrição"
                
                />
            </Form>
            <Button>Salvar entrada</Button>
        </Wrapper>
    )
}
