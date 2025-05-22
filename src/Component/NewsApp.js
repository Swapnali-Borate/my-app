import React, { useEffect } from 'react'
import Cards from './Cards'
import { useState } from 'react';

const NewsApp = () => {

    const [search, setSearch] = useState('India');
    const [newsData, setNewsData] = useState(null)

    const API_KEY = "43ddfdcc3aa34f82840ffe001ffde41e";

    const getData = async ()=>{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
        const jsonData = await response.json()
        console.log(jsonData.articles)
        setNewsData(jsonData.articles);
    }

    useEffect(()=>{
        getData()  
    },[])

    const handleInput =(e)=>{
        console.log(e.target.value);
        setSearch(e.target.value)
    }

    const userInput=(e)=>{
        setSearch(e.target.value)  
    }

    return (
        <div>
            <nav className='flex bg-blue-400 p-4 justify-between'>
                <div>
                    <h1 className='font-bold pl-40'>Trendy News</h1>
                </div>
                <ul className=''>
                    <a>All News</a>
                    <a className='pl-4'>Trending</a>
                </ul>
                <div className=''>
                    <input type='text' placeholder='Search News' className='p-2' value={search} onChange={handleInput} />
                    <button className='ml-2 bg-blue-800 p-2 text-white' onClick={getData}>Search</button>
                </div>
            </nav>

            <div className='text-center font-bold mt-6 text-2xl'>
                <h1>Stay Update with TrendyNews</h1>
            </div>

            <div className='w-1/2 mx-auto mt-8 '>
                <button className='px-4 py-2 bg-red-400 ml-6 rounded-2xl' onClick={userInput} value="sports">Sports</button> 

                <button className='px-4 py-2 bg-red-400 ml-6 rounded-2xl' onClick={userInput} value="politics">Politics</button>

                <button className='px-4 py-2 bg-red-400 ml-6 rounded-2xl' onClick={userInput} value="entertainment">Entertainment</button>

                <button className='px-4 py-2 bg-red-400 ml-6 rounded-2xl' onClick={userInput} value="health">Health</button>

                <button className='px-4 py-2 bg-red-400 ml-6 rounded-2xl' onClick={userInput} value="fitness">Fitness</button>

            </div>

            <div>
                {newsData? <Cards data = {newsData} /> : null }
                
            </div>
        </div>
    )
}

export default NewsApp
