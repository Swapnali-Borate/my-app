import React, { useState } from 'react'

const Pagination = () => {
    const data = {
        name: "",
        email: "",
        password: ""
    }
    const [inputData, setInputData] = useState(data)
    const [msg, setMsg] = useState()    

    const handleSubmit = (e) => {  
        // console.log(e.target.value)
        setInputData({ ...inputData, [e.target.name]: e.target.value })
    }

    const submit=(e)=>{
        e.preventDefault()
        if(!inputData.name || !inputData.email || !inputData.password){
            alert('All fileds are mondatory')
        }else{
            setMsg(true)
        }
    }
    return (
        <div>
            <form onSubmit={submit}>
                {
                    msg? inputData.name+" : Log in Successfully " : null
                }
                <input type='text' placeholder='Enter name' name='name' value={inputData.name} onChange={handleSubmit} />
                <input type='email' placeholder='Enter email' name='email' value={inputData.email} onChange={handleSubmit} />
                <input type='password' placeholder='Enter pass' name='password' value={inputData.password} onChange={handleSubmit} />
                <button className='p-2 border'>Login</button>
            </form>
        </div>
    )
}

export default Pagination
