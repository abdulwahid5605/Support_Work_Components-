import React from 'react'

const GlobalContext=React.createContext({
    monthIndex:0,
    setMonthIndex:(index)=>{} //it will change the value of monthIndex
})
export default GlobalContext