import React from 'react'
import { Link } from 'react-router-dom'
import './introBanner.scss'

export default function IntroBanner() {
  return (
    <div className='IntroBanner'>
        <div className="information">
            <h1>LEARN FORM TRADER EXPERTS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod a consectetur culpa aliquam dignissimos ut vitae, rem fugiat, veniam dolores magni necessitatibus sed temporibus voluptatem!</p>
            <button><Link to={"/registration"}>Start Learning</Link></button>
        </div>
        
    </div>
  )
}
