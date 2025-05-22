import React, { useState } from 'react'

const Login = () => {
    const data = {
        name: '',
        email: '',  
        password: ''  
    }
    const [inputData, setInputData] = useState(data)
    const [msg, setMsg] = useState()
    // console.log(inputData)
    const handleSubmit = (e) => {
        setInputData({...inputData, [e.target.name]: e.target.value})
    }
    const Submit = (e) => {
        e.preventDefault()
        if(!inputData.name || !inputData.email || !inputData.password){
            alert('All values are compalsory')
        }
        else{
            setMsg(true)
        }
    }
    return (
        <div>
            <form onSubmit={Submit}>
                {
                    msg?  inputData.name +' : Successfully Login ' : null
                }
                <input type='text' placeholder='Name' name='name' value={inputData.name} onChange={handleSubmit} />
                <input type='email' placeholder='Email' name='email' value={inputData.email} onChange={handleSubmit} />
                <input type='password' placeholder='Password' name='password' value={inputData.password} onChange={handleSubmit} />
                <button className='border p-2'>Log in</button>
            </form>
        </div>
    )
}

export default Login
