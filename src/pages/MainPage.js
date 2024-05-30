import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function MainPage() {

  // state for the fields
  const [date, setDate] = useState(null);
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [amountInSourceCurrency, setAmountInSourceCurrency] = useState(0);
  const [amountInTargetCurrency, setAmountInTargetCurrency] = useState(0);

  const [currencyName, setCurrencyName] = useState([]);

  // handle submit method
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      date,
      setSourceCurrency,
      setTargetCurrency,
      amountInSourceCurrency
    )
  }

  // get all currency list
  useEffect(() => {
    const getCurrencyNames = async() => {
      try{

        const response = await axios.get(
          "http://localhost:5000/getAllCurrencies"
        );
        setCurrencyName(response.data);

      }catch (e) {
        console.error(e);
      }
    };
    getCurrencyNames();
  }, [])

  return (
    <div>
        <h1 className='lg:mx-32 text-5xl front-boald text-blue-500'> Convert Your Currency Today</h1>

        <p className='lg:mx-32 opacity-40 py-6'>
            Welcome to 'Convert currencies Today'! This application allows you to easyly Convert currenciesbased on the latest reates.
        </p>
        
        <div className='mt-5 flex items-center justify-center flex-col'>
          <section className='w-full lg:w-1/2'>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                  <label 
                  htmlFor={date} 
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Date
                    </label>

                  <input 
                  onChange={(e) => setDate(e.target.value)}
                  type="Date" 
                  id={date}
                  name={date} 
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                  placeholder="date" 
                  required 
                  />
                </div>

                <div className='mb-4'>
                  <label 
                  htmlFor={sourceCurrency}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Source Currency
                    </label>
                  <select 
                  onChange={(e) => setSourceCurrency(e.target.value)}
                  id={sourceCurrency} 
                  name={sourceCurrency}
                  value={sourceCurrency}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                  placeholder="Select the source currency" 
                  required
                  >
                    
                    <option value="">Select source currency</option>
                    <option value="">Select source </option>
                    {Object.keys(currencyName).map((currency) => (
                      <option className='p-1' key={currency} value={currency}>
                        {currencyName[currency]}
                      </option>
                    ))}
                  </select>
                </div>

                <div className='mb-4'>
                  <label 
                  htmlFor={targetCurrency} 
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Target Currency
                    </label>
                  <select 
                  onChange={(e) => setTargetCurrency(e.target.value)}
                  id={targetCurrency}
                  name={targetCurrency}
                  value={targetCurrency}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                  placeholder="Select the target currency" 
                  required
                  >
                    
                    <option value="0">Select  target currency</option>
                    <option value="1">Select  currency</option>
                  </select>
                </div>

                <div className='mb-4'>
                  <label 
                  htmlFor={amountInSourceCurrency} 
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Amount in source currency
                    </label>
                  <input 
                  onChange={(e) => setAmountInSourceCurrency(e.target.value)}
                  type="number" 
                  id={amountInSourceCurrency}
                  name={amountInSourceCurrency}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                  placeholder="Amount in source currency" 
                  required 
                  />
                </div>

                <button className='bg-blue-600 hover:bg-blue-700
                text-white font-bold py-2 px-4 rounded-md'>
                  Get the target Currency
                  </button>

            </form>
          </section>
        </div>

    </div>
  )
}