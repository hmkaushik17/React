
import { useState } from 'react'
import { InputBox } from './components';
import useCurrencyInfo from './customhooks/useCurrencyInfo'

function App() {

  const [amount,setAmount] =useState(0)
  const [from,setFrom]=useState('usd')
  const [to,setTo]=useState('inr')
  const [convertedAmount, setConvertedAmount]=useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo || {})

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = ()=>
  {
    setConvertedAmount(amount*currencyInfo[to])
  }
  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/36375383/pexels-photo-36375383.jpeg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                
                                onCurrencyChange={(currency) => setFrom(currency)}  
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}

                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                selectCurrency={to}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App

// // import { useEffect, useState } from "react";

// // function App() {

// //   const [data, setData] = useState({});
// //   const [amount, setAmount] = useState(1);
// //   const [from, setFrom] = useState("usd");
// //   const [to, setTo] = useState("inr");
// //   const [convertedAmount, setConvertedAmount] = useState(0);

// //   useEffect(() => {
// //     fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`)
// //       .then((res) => res.json())
// //       .then((res) => {
// //         setData(res[from]);
// //       });
// //   }, [from]);

// //   const convert = () => {
// //     setConvertedAmount(amount * data[to]);
// //   };

// //   return (
// //     <div className="p-10">

// //       <h1 className="text-3xl font-bold mb-4">
// //         Currency Converter
// //       </h1>

// //       <input
// //         type="number"
// //         value={amount}
// //         onChange={(e)=>setAmount(e.target.value)}
// //         className="border p-2 mr-2"
// //       />

// //       <select onChange={(e)=>setFrom(e.target.value)}>
// //         <option value="usd">USD</option>
// //         <option value="inr">INR</option>
// //         <option value="eur">EUR</option>
// //       </select>

// //       <select onChange={(e)=>setTo(e.target.value)}>
// //         <option value="inr">INR</option>
// //         <option value="usd">USD</option>
// //         <option value="eur">EUR</option>
// //       </select>

// //       <button
// //         onClick={convert}
// //         className="bg-blue-500 text-white px-4 py-2 ml-3 rounded"
// //       >
// //         Convert
// //       </button>

// //       <h2 className="mt-5 text-xl">
// //         Converted Amount: {convertedAmount}
// //       </h2>

// //     </div>
// //   );
// // }

// // export default App;
