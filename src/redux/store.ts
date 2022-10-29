import { reducerCalc } from "./reducers/calculator.reducer";
import { configureStore } from '@reduxjs/toolkit'

export interface StoreModel {
    calculator: { num1: number, num2: number }
}

export const store = configureStore({
    reducer: {
        calculator: reducerCalc
    },
})

export default store;
