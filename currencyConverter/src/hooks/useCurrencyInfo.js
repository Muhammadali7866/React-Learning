import { useEffect,useState } from "react";


function useCurrencyInfo (currency){
    const [data,setData] = useState({});
    

    useEffect(() => {
        const fetchData = async () => {
          try {
            const cleanCurrency = currency.replace(/"/g, "");

            const res = await fetch(
              `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${cleanCurrency}.json`
            );
          
            const json = await res.json();  // Convert the response to JSON
            console.log({json});
            
            if(!json[currency]){
                setData({})
            }else{

                setData(json[currency])
            }
          } catch (error) {
            console.error("Error fetching or parsing data:", error);
          }
        };
    
        fetchData();
      }, [currency]);
    
      return data;
}

export default useCurrencyInfo

