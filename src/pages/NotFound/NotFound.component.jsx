import React from 'react'
import {notfoundImg} from "../../assets/images/images"
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='h-screen max-h-screen flex justify-center items-center'>
        <div className="min-w-52 text-center">
            <img src={notfoundImg} alt="Not Found" className="w-full"/>
            <Link
             to={-1} 
             className='p-2 px-6 bg-accent hover:bg-accent/90 transition-colors duration-150 text-white font-semibold rounded-md'>
                Bact to previous page
            </Link>
        </div>

    </div>
  )
}
