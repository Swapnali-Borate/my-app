import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Mealinfo = () => {
    const {mealid} = useParams()
    const [info, setInfo] = useState()
    // console.log(mealid)

    const getInfo = async()=>{
        const getData = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
        const json = await getData.json()
        console.log(json.meals[0])
        setInfo(json.meals[0])
    }
    if(info != ""){
        getInfo()
    }
  return (
    <div>
      {
        !info ? "DATA NOT FOUND" :
        <div>
            <img src={info.strMealThumb} className='w-60'/>
            <div>
                <h1 className='font-bold mt-2'>Recipe Detail</h1>
                <button className='p-2 bg-red-400 mt-2'>{info.strMeal}</button>
                <h3 className='font-bold pt-2'>Instruction's</h3>
                <p>{info.strInstructions}</p>
            </div>
        </div>
      }
    </div>
  )
}

export default Mealinfo
