import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';

export default function Transactions(){
    const [transactions, setTransactions] = useState([]);
    const { user } = useContext(UserContext); 
    useEffect(() => {
        const request = axios.get('http://localhost:3000/api/transactions', {headers: { 'Authorization': `Bearer ${user.token}`}});
        request.then(response => setTransactions(response.data))
        .catch(error => alert(error.response.data.error));
    }, []);
    console.log(transactions);
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