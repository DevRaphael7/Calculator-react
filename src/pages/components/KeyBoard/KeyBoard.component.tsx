import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { operation, resetAll, setNum1, setNum2 } from 'redux/reducers/calculator.reducer';
import { StoreModel } from 'redux/store';

import './KeyBoard.css'

const ClearAllButton = () => {
    const dispatch = useDispatch()

    return <button className="btn-style bg-num" onClick={() => {
        console.log("resete")
        dispatch(resetAll())
    }}>C</button>
}

const ButtonSetStateNum2 = (props: any) => {
    const dispatch = useDispatch()
    const state: any = useSelector<StoreModel>((state) => state.calculator);

    const numero = state.num2 !== "0" ? state.num2.toString() + props.number : props.number.toString();

    return <button onClick={() => dispatch(setNum2(numero))}
        className="btn-style bg-num">{props.number}</button>
}

const ButtonSetOperation = (props: any) => {
    const dispatch = useDispatch()
    const state: any = useSelector<StoreModel>((state) => state.calculator);

    return <button onClick={() => {
        dispatch(operation(props.operation))

        if(state.num1 === "0") {
            dispatch(setNum1(state.num2))
            dispatch(setNum2("0"))
            return
        }

        let num = 0

        const [numberOne, numberTwo] = [
            (state.num1 as string).replaceAll(",", "."),
            (state.num2 as string).replaceAll(",", ".")
        ]

        if(props.operation === "+" || state.operation === "+") {
            num = Number(numberOne) + Number(numberTwo);
        } else if (props.operation === "-" || state.operation === "-") {
            num = Number(numberOne) - Number(numberTwo);
        } else if (props.operation === "/" || state.operation === "/") {
            num = Number(numberOne) / Number(numberTwo);
        } else if (props.operation === "*" || state.operation === "*") {
            num = Number(numberOne) * Number(numberTwo);
        } else if (props.operation === "%"  || state.operation === "%") {
            num = Number(numberOne) % Number(numberTwo);
        } else if (props.operation === "←") {
            console.log(Number(numberTwo.slice(0, numberTwo.length - 1)))
            num = Number(numberTwo.slice(0, numberTwo.length - 1));
            dispatch(setNum2(num))
            return
        }

        if (props.operation === "=") {
            dispatch(setNum2(num.toString()))
            dispatch(setNum1("0"))
        } else {
            dispatch(setNum1(num.toString()))
            dispatch(setNum2("0"))
        }
    }} className="btn-style bg-operation">{props.operation}</button>
}

export class KeyBoard extends React.Component {

    render(): React.ReactNode {
        return <div style={ {'padding':'10px', 'backgroundColor':'#22252d'}}>
            <div className='grid keyboard'>
                <ButtonSetOperation operation="%" />
                <ClearAllButton />
                <ButtonSetOperation operation="←" />
                <ButtonSetOperation operation="*" />
                <ButtonSetStateNum2 number={9} />
                <ButtonSetStateNum2 number={8} />
                <ButtonSetStateNum2 number={7} />
                <ButtonSetOperation operation="/" />
                <ButtonSetStateNum2 number={6} />
                <ButtonSetStateNum2 number={5} />
                <ButtonSetStateNum2 number={4} />
                <ButtonSetOperation operation="+" />
                <ButtonSetStateNum2 number={3} />
                <ButtonSetStateNum2 number={2} />
                <ButtonSetStateNum2 number={1} />
                <ButtonSetOperation operation="-" />
                <ButtonSetOperation operation=" " />
                <ButtonSetStateNum2 number={0} />
                <ButtonSetStateNum2 number={','} />
                <ButtonSetOperation operation="=" />
            </div>
        </div>
    }
}