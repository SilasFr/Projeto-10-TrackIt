import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import React from 'react';

class LoaderApp extends React.Component {
    render() {
        return (
            <Loader
                type="ThreeDots"
                color="#FFFFFF"
                height={50}
                width={50}
                timeout={0}
            />
        );
    }
}

const Trackit = styled.div`
    background-color: #F2F2F2;
    height: 100vh;
    padding: 15px;
    padding-top: 80px;
`

const LoginScreen = styled.div`
    width: 100%;
    height: 100vh;

    padding: 68px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    a{
        color: #52B6FF;
    }
`

const NewHabit = styled.div`
    width: 340px;
    height: 180px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    padding: 20px;
    margin-bottom: 30px;
    border-radius: 5px;
    background-color: #fff;
    input{
        width: 303px;
        height: 45px;
        padding:10px;
        font-size: 19.976px;
        line-height: 25px;
        border: 1px solid #D4D4D4;
    }
    input::placeholder{
        -webkit-text-fill-color: #DBDBDB;
    }
`
const WeekDays = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    button{
        width: 30px;
        height: 30px;
        border-radius: 5px;
        color: #DBDBDB;
        background: #FFFFFF;
        border: 1px solid #D4D4D4;
    }
    .id{
        display: none;
    }
`

const HabitOutput = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 5px;
    margin-top: 20px;
    button{
        width: 84px;
        height: 35px;
        font-weight: normal;
        font-size: 15.976px;
        line-height: 20px;
        border: none;
        border-radius: 5px;
    }
    .cancel{
        background: none;
        color: #52B6FF;
    }
    .save{
        background-color: #52B6FF;
        color: #fff;
    }
`

export { Trackit, LoaderApp, LoginScreen, NewHabit, WeekDays, HabitOutput }