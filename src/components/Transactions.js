import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import Transaction from './Transaction';

export default function Transactions(){
    const [transactions, setTransactions] = useState([]);
    const { user } = useContext(UserContext); 
    const amount = parseFloat(user.amount.replace(',', '').replace('$', ''));
    useEffect(() => {
        const request = axios.get('https://mywallet-backend.herokuapp.com/api/transactions', {headers: { 'Authorization': `Bearer ${user.token}`}});
        request.then(response => setTransactions(response.data))
        .catch(error => alert(error.response.data.error));
    }, []);
    
    
    return(
        <TransactionContainer transactions = {transactions} amount = {amount}>
            <span>
                {transactions.length === 0 ? 
                    <p>Não há registro de <br /> entrada ou saída</p> :
                    transactions.map(t => 
                        <Transaction
                            key = {t.id}
                            transaction = {t}
                        ></Transaction>    
                    )
                }
            </span>
            {
                transactions.length === 0 ?
                null :
                <div>
                    <p className = 'balance'>SALDO</p>
                    <p className = 'amount'>{amount.toFixed(2).replace('.', ',').replace('-', '')}</p>
                </div>
            }
            
        </TransactionContainer>
    )
}

const TransactionContainer = styled.div`
    width: 85vw;
    height: 65vh;
    border-radius: 5px;
    background: white;
    padding: 10px;
    ${props => props.transactions.length === 0 ?  "display: flex; justify-content: center; align-items: center;" : 'display: flex; flex-direction: column; justify-content: space-between;'}
    overflow: scroll;

    & > p{
        color: #868686;
        font-size: 20px;
    }

    & > div{
        display: flex;
        justify-content: space-between;

        .balance{
            font-weight: bold;
        }

        .amount{
            color: ${props => props.amount > 0 ? '#03AC00' : '#C70000'};
        }
    }
`;