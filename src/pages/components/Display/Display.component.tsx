import React from 'react';
import { useSelector } from "react-redux";
import { StoreModel } from 'redux/store';
import './Display.css'

function GetNumbers() { //Nome de função letra maiúscula.
    const state: any = useSelector<StoreModel>((state) => state.calculator);
    return <div style={{'textAlign':'end'}}>
        { state.num1 !== "0" ? <p className='nums-top'>{ state.operation } { state.num1 }</p> : <div></div> }
        <p className='nums-down'>{ state.num2 }</p>
    </div>
}

export class Display extends React.Component {

    render(): React.ReactNode {

        return <div>
            <div className='display grid end justify-end'>
                <GetNumbers />
            </div>
        </div>
    }
}