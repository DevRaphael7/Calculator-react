import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  num1: 0,
  num2: 0,
  result: 0,
  operation: "+"
}

export const calcSlice = createSlice({
  name: 'calculator',
  initialState: initialState,
  reducers: {
    setNum1: (state) => {
      state.num1 += state.num2
    },
    setNum2: (state, action) => {
      state.num2 = action.payload
    },
    result: (state) => {
      state.result = state.num1 + state.num2
    },
    operation: (state, action) => {
      state.operation = action.payload
    }
  }
})

export const { setNum1, setNum2, operation, result } = calcSlice.actions
export const reducerCalc = calcSlice.reducer

