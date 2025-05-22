import React, { useState } from 'react'

const Data = [
    {
        name: 'Paneer',
        brand: 'Shahi',
        images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0vcOaDpWJq8BzRGIRXRRjnvndTh5Bm7IWLw&s'
    },
    {
        name: 'Pizza',
        brand: 'Dominoz',
        images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0m0Z6Nkc3UXuyG3uc7bgFQYpZA5YFMQazYw&s'
    },
    {
        name: 'Burger',
        brand: 'KFC',
        images: 'https://i.pinimg.com/736x/6c/ee/58/6cee589c2f553320ee93e5afced09766.jpg'
    },
    {
        name: 'Dosa',
        brand: 'Anna',
        images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs88VF6O4r8iF-qR-SSJ0vJqG1iXqEADkZ0Q&s'
    },
    {
        name: 'Biryani',
        brand: 'Nawab',
        images: 'https://i.pinimg.com/474x/67/e7/ff/67e7ff9859d6c9df0c30b897bf901e1d.jpg'
    },
    {
        name: 'Chatani',
        brand: 'Garlik',
        images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkK7lkg3689jF-HQcbgez68Wgd-_e7TKTHVA&s'
    },
    {
        name: 'Cake',
        brand: 'Ice-cake',
        images: 'https://thumbs.dreamstime.com/b/downloadable-festive-birthday-cake-png-image-perfect-party-designs-sweet-treat-graphics-bakery-celebrate-style-351469780.jpg'
    }
]
const MyApp = () => {
    const [store, setStore] = useState(Data)
    const [data, setData] = useState('')

    const getData = (e) => {
        console.log(e.target.value)
        setData(e.target.value)
    }

    let filterOut = store.filter((curValue) => {
        return curValue.name.toLowerCase().includes(data) || curValue.brand.toLowerCase().includes(data)
    })

    return (
        <>
            <div className='w-1/4 mx-auto bg-purple-200 mt-10 pl-10 pr-10 mb-10 rounded-2xl'>
                <div>
                    <input placeholder='Enter name' className='mt-8 pr-18 p-2 pl-8'
                        onChange={getData} />
                    <div className='flex justify-between pt-6 font-bold'>
                        <h2>Name</h2>
                        <h2>Brand</h2>
                        <h2>Images</h2>
                    </div>
                </div>
                {
                    filterOut.map((curItem) => {
                        return (
                            <div className='flex justify-between pt-10'>
                                <p>{curItem.name}</p>
                                <p>{curItem.brand}</p>
                                <img src={curItem.images} className='w-20 mb-4' />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default MyApp
