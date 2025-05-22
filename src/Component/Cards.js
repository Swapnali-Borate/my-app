import React from 'react'

const Cards = ({ data }) => {

  // console.log(data)

  
  
  return (
    <div>
      {
        data.map((curItem,index) => {
          return (
            <div className=' w-1/2 mx-auto'>
              <img src={curItem.urlToImage} className='w-100 mt-10 rounded-3xl mb-2' />
              <div>
                <a className='font-bold' onClick={()=>window.open(curItem.url)}>{curItem.title}</a>
                <p className='mt-2'>{curItem.description}</p>
                <button className='bg-red-400 p-2 rounded-2xl font-bold ml-60 mt-4' 
                onClick={()=>window.open(curItem.url)}
                >View More</button>
              </div>
            </div>
          )
        })
      }
      </div>
  )
}

export default Cards
