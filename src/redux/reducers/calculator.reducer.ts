import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  num1: "0",
  num2: "0",
  result: "0",
  operation: "+"
}

export const calcSlice = createSlice({
  name: 'calculator',
  initialState: initialState,
  reducers: {
    setNum1: (state, action) => {
      state.num1 = action.payload
    },
    setNum2: (state, action) => {
      state.num2 = action.payload
    },
    operation: (state, action) => {
      state.operation = action.payload
    },
    resetAll: (state) => {
      state.num1 = "0"
      state.num2 = "0"
      state.operation = "+"
    }
  }
})

export const { setNum1, setNum2, operation, resetAll } = calcSlice.actions
export const reducerCalc = calcSlice.reducer

