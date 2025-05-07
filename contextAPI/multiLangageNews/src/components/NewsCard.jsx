import React, { useEffect, useState } from 'react'
import { FetchNews } from '../utils/fetchNews'
import useLanguage from '../context/LanguageContext';

export const NewsCard = () => {
    const [data, setdata] = useState('')
    const {languageMode} = useLanguage()


    useEffect(() => {
        const fetchData = async () => {
            const result = await FetchNews();
            setdata(result[languageMode])
        };

        fetchData();
    }, [languageMode]);

    return (
        <>
            <div className='flex items center justify-center h-screen'>

                <div className='border-4 w-full max-w-lg h-1/2 flex-col justify-center items-center text-center rounded-xl shadow-md'>
                    <div className='text-xl font-semibold mb-2'>{data.title} </div>
                    <div className='text-black'>{data.description}</div>
                </div>
            </div>
        </>
    )
}
