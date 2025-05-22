import React, { useState } from 'react'
import Mealcards from './Mealcards'

const Mainfile = () => {
    const [data, setData] = useState()
    const [search, setSearch] = useState()

    const handleInput = (event) => {
        setSearch(event.target.value)
    }

    const MyFun = async () => {
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            const jsonData = await get.json()
            // console.log(jsonData.meals)
            setData(jsonData.meals)
    }
    // console.log(data)
    return (
        <div>
            <div className='ml-60'>
                <input type='text' placeholder='Enter Dishe' className='p-2  ml-8'
                    onChange={handleInput} />
                <button className='p-2 bg-purple-400 m-2' onClick={MyFun}>Search</button>
            </div>
            <Mealcards detail={data} />
        </div>
    )
}

export default Mainfile
