import { useEffect,useState } from "react";

// function hello()
// {
//     return[]
// }

function useCurrencyInfo(currency)
{
    const[data,setData]=useState({})
    useEffect(() => 
    { 
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json()) //data mostly comes in string from API so convert into json
        .then((res)=>setData(res[currency]))
        console.log(data)
     },[currency])
    return data
}

export default useCurrencyInfo;