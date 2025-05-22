import React, { useState } from 'react'

const Calculator = () => {
    const [data, setData] = useState("")
    const getValue = (e) => {
        console.log(e.target.value)
        setData(data.concat(e.target.value))
    }

    const calculation = () => {
        // js mdhe ek eval method aahe, tya method mdhe kontahi operator[+,-,*,%] use kel tr ti eval method tyach calculation krte.
        // below use toString() method because aapan 5+5=10 kel tr ha data(10) number rupat asto tr tya numbar la string mdhe convert krnyasathi toString method use keli ahe. 
        setData(eval(data).toString())
    }

    const back =()=>{
        // slice method use create new string by selected element.
        setData(data.slice(0,-1))
    }
    const clear =()=>{
        setData('')
    }
    return (
        <div className=' w-1/4 mx-auto border rounded-2xl bg-purple-200 mt-10'>
            <div className='flex mx-auto justify-center pt-6'>
                <input placeholder='0' className='p-2 rounded-xl' value={data} />
            </div>
            <div className='pt-8 pb-8 '>
                <div className='flex mx-auto justify-between'>
                    <button className='w-16 bg-red-200' onClick={getValue} value="(">(</button>
                    <button className='w-16 bg-red-200' onClick={getValue} value=")">)</button>
                    <button className='w-16 bg-red-200' onClick={getValue} value="%">%</button>
                    <button className='w-16 bg-red-200' onClick={clear}>AC</button>
                </div>
                <br />
                <div className='flex mx-auto justify-between'>
                    <button className='w-16 bg-red-200' onClick={getValue} value="7">7</button>
                    <button className='w-16 bg-red-200' onClick={getValue} value="8">8</button>
                    <button className='w-16 bg-red-200' onClick={getValue} value="9">9</button>
                    <button className='w-16 bg-red-200' onClick={getValue} value="*">*</button>
                </div>
                <br />
                <div className='flex mx-auto justify-between'>
                    <button className='w-16 bg-red-200' onClick={getValue} value="4">4</button>
                    <button className='w-16 bg-red-200' onClick={getValue} value="5">5</button>
                    <button className='w-16 bg-red-200' onClick={getValue} value="6">6</button>
                    <button className='w-16 bg-red-200' onClick={getValue} value="-">-</button>
                </div>
                <br />
                <div className='flex mx-auto justify-between'>
                    <button className='w-16 bg-red-200' onClick={getValue} value="1">1</button>
                    <button className='w-16 bg-red-200' onClick={getValue} value="2">2</button>
                    <button className='w-16 bg-red-200' onClick={getValue} value="3">3</button>
                    <button className='w-16 bg-red-200' onClick={getValue} value="+">+</button>
                </div>
                <br />
                <div className='flex mx-auto justify-between'>
                    <button className='w-16 bg-red-200' onClick={getValue} value="0">0</button>
                    <button className='w-16 bg-red-200' onClick={back}>Back</button>
                    <button className='w-16 bg-red-200' onClick={calculation} >=</button>
                    <button className='w-16 bg-red-200' onClick={getValue} value="/">/</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator
