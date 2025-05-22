import React from 'react'
import { Link } from 'react-router-dom'

const StudentTable = () => {
    return (
        <div className='w-full mx-auto justify-center border p-4 rounded-xl'>
            <div>
                <div className='text-xl font-bold mb-8'>Student Record</div>
                <Link className='border p-2 rounded-xl bg-red-800 font-bold text-white mb-6' to='/student/create'>Add new student</Link> 
                <table>
                    <thead >
                        <tr>
                            <th className='pr-10'>ID</th>
                            <th className='pr-10'>Name</th>
                            <th className='pr-10'>Place</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >1</td>
                            <td >Aarav</td>
                            <td>Pune</td>
                            <td>8975019204</td>
                            <td className='pl-6'>
                                <a href='' className='pr-4'>view</a>
                                <a href='' className='pr-4'>edit</a>
                                <a href=''>delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StudentTable
