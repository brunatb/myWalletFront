import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Transactions(){
    const [transactions, setTransactions] = useState([]); 
    useEffect(() => {
        
    })

    return(
        <TrasactionContainer transactions = {transactions}>
            {transactions.length === 0 ? 
                <p>Não há registro de <br /> entrada ou saída</p> :
                null
            }
        </TrasactionContainer>
    )
}

const TrasactionContainer = styled.div`
    width: 85vw;
    height: 65vh;
    border-radius: 5px;
    background: white;
    ${props => props.transactions.length === 0 ?  "display: flex; justify-content: center; align-items: center;" : null}

    & > p{
        color: #868686;
        font-size: 20px;
    }
`;