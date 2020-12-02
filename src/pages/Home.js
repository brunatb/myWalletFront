import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { VscSignOut } from 'react-icons/vsc';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import Transactions from '../components/Transactions';

export default function Home(){
    const { user } = useContext(UserContext);
    const history = useHistory();
    console.log(user);
    if(user === null){
        history.push('/sign-in');
    }

    return (
        <Wrapper>
            <div className = 'top'>
                <h2>Olá {user.name}</h2>
                <VscSignOut />
            </div>
            <Transactions />
            <div className = 'containerButtons'>
                <Link to = '/earns'>
                    <button>
                        <AiOutlinePlusCircle />
                        <p>Nova <br /> 
                        entrada</p>
                    </button>
                </Link>
                <Link to = '/expenses'>
                    <button>
                        <AiOutlineMinusCircle />
                        <p>Nova <br /> 
                        saída</p>
                    </button>
                </Link>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-family: 'Raleway', sans-serif;
    .top{
        width: 85vw;
        display: flex;
        justify-content: space-between;
        font-size: 26px;
        font-weight: bold;
        color: white;
        margin: 20px 0 20px 0;
    }

    .containerButtons{
        width: 85vw;
        display: flex;
        justify-content: space-between;
        margin: 10px 0;

        button{
            width: 40vw;
            height: 18vh;
            border-radius: 5px;
            padding: 10px;
            color: white;
            font-weight: bold;
            font-size: 15px;
            background: #A328D6;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;

            svg{
                font-size: 17px;
            }
        }
    }
`;