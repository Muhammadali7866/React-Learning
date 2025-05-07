import { useState } from 'react';
import './App.css';
import { NewsCard } from './components/NewsCard';
import  { LanguageProvider } from './context/LanguageContext';

function App() {
  const [isOpen, setIsOpen] = useState(false); // Initially hidden
  const [languageMode, setLanguageMode] = useState("english")
  const handleLanguageChange = (lang) => {
    setLanguageMode(lang);
    setIsOpen(false)
  }
  return (
    <>
    <LanguageProvider value={{languageMode,setLanguageMode}}>

      <div className='h-screen bg-gray-600'>
        <div className='p-6 flex justify-center text-3xl font-bold'>MultiLanguage News APP</div>
        <div className='flex justify-center'>

          <div className="relative inline-block text-left">

            <button
              onClick={() => setIsOpen(!isOpen)} // Toggle dropdown visibility
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Select Language
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {isOpen && (

              <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  <ul className="py-2 text-sm text-gray-700">
                    {["english", "chinese", "german", "russian"].map((lang) => (
                      <li key={lang}>
                        <button
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                          onClick={() => handleLanguageChange(lang)}
                        >
                          {lang}
                        </button>
                      </li>
                    ))}
                  </ul>
                </ul>
              </div>
            )}
          </div>


        </div>
        <NewsCard />

      </div>
      </LanguageProvider>

    </>
  );
}

export default App;
