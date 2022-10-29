import React from 'react';
import { useSelector } from "react-redux";
import { StoreModel } from 'redux/store';
import './Display.css'

function GetNumbers() { //Nome de função letra maiúscula.
    const state: any = useSelector<StoreModel>((state) => state.calculator);
    return <div className='display grid end justify-end'>
            <p className='nums-top'>{ state.num1 }</p>
            <p className='nums-down'>{ state.num2 } { state.operation }</p>
        </div>
}

export class Display extends React.Component {

    render(): React.ReactNode {

        return <div>
            <GetNumbers />
        </div>
    }
}