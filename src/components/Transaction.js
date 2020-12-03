import React from 'react';
import styled from 'styled-components';

export default function Transaction({ transaction }){
    const { date, description, value } = transaction;
    const dateFormat = `${date[8]}${date[9]}/${date[5]}${date[6]}`;
    const valueFormat = parseFloat(value.replace(',', '').replace('$', ''));
    
    return (
        <Container value = {valueFormat}>
            <p className = 'date'>{dateFormat}</p>
            <p className = 'description'>{description}</p>
            <p className = 'value'>{valueFormat.toFixed(2).replace('.', ',').replace('-', '')}</p>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 10px 0;
    .date{
        color: #C6C6C6;
        font-size: 16px;
    }

    .value{
        color: ${props => props.value > 0 ? '#03AC00' : '#C70000'}
    }
`;