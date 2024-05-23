import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0
}

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setvalue: (state, action) => {
            state.value = action.payload
        }
    }

})

export const { setvalue } = weatherSlice.actions
export default weatherSlice.reducer

