import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

const LayoutComune = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Outlet />
            </div>
        </>
    )
}

export default LayoutComune