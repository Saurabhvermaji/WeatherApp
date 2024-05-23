import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { setvalue  } from '../slices/weatherSlice'

const Weather = () => {
    const value = useSelector(state => state.weather.value)
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(setvalue(value + 1));
    }

    return (
        <>
            <h4>Welcome To Our Weather Application</h4>
            <h3>{value}</h3>
            <button onClick={increment}>Increment</button>
        </>
    )
}

export default Weather
