import React from 'react'
import { NavLink } from 'react-router-dom'

const Mealcards = ({ detail }) => {
    console.log(detail)
    return (
        <div>
            <div>
                {
                    !detail ? "" :
                        detail.map((curItem) => {
                            return (
                                <div className='ml-60 mt-20'>
                                    <img src={curItem.strMealThumb} className='w-60' />
                                    <p>{curItem.strMeal}</p>
                                    <NavLink to={`/${curItem.idMeal}`}>
                                        <button className='p-2 bg-gray-600 text-white'>Recipe</button>
                                    </NavLink>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default Mealcards
