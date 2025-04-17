
import {  useState } from 'react';
import './App.css'
import InputBox from "./components/InputBox"
import useCurrencyInfo from './hooks/useCurrencyInfo';
function App() {
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("pkr")
    const [convertedAmount,setConvertedAmount] = useState(100)
    const [amount,setAmount] = useState(0)
    

    const swap = ()=>{
        console.log("hello from swap");
        setTo(from);
        setFrom(to)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

    const convert = ()=>{
console.log(currencyInfo[to]);
console.log({amount});


        
        setConvertedAmount(amount* currencyInfo[to])
        
    }

    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo)
    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?cs=srgb&dl=pexels-thatguycraig000-1563356.jpg&fm=jpg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-lg mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()

                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                selectCurrency={from}
                                amount= {amount}
                                currencyOption={options}
                                onCurrencyChange={(currency)=>{
                                setAmount(currency)                                    
                                }}
                                onAmountChange={(amount)=>setAmount(amount)}

                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={()=>swap()}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOption={options}
                                selectCurrency={to}
                                onCurrencyChange={(currency)=>{
                                    setTo(currency)                                    
                                }}


                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
