import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { operation, setNum1, setNum2 } from 'redux/reducers/calculator.reducer';
import { StoreModel } from 'redux/store';

import './KeyBoard.css'

const ButtonSetStateNum2 = (props: any) => {
    const dispatch = useDispatch()

    return <button onClick={() => dispatch(setNum2(Number(props.number)))}
        className="btn-style bg-num">{props.number}</button>
}

const ButtonSetOperation = (props: any) => {
    const dispatch = useDispatch()

    return <button onClick={() => {
        dispatch(operation(props.operation))
    }} className="btn-style bg-operation">{props.operation}</button>
}

export class KeyBoard extends React.Component {

    render(): React.ReactNode {
        return <div style={ {'padding':'10px', 'backgroundColor':'#22252d'}}>
            <div className='grid keyboard'>
                <ButtonSetStateNum2 number={9} />
                <ButtonSetStateNum2 number={8} />
                <ButtonSetStateNum2 number={7} />
                <ButtonSetOperation operation="+" />
                <ButtonSetStateNum2 number={6} />
                <ButtonSetStateNum2 number={5} />
                <ButtonSetStateNum2 number={4} />
                <ButtonSetOperation operation="-" />
                <ButtonSetStateNum2 number={3} />
                <ButtonSetStateNum2 number={2} />
                <ButtonSetStateNum2 number={1} />
                <ButtonSetOperation operation="/" />
                <ButtonSetStateNum2 number={0} />
            </div>
        </div>
    }
}