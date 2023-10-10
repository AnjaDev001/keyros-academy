import React from 'react'
import { Link } from 'react-router-dom'
import './ContactUs.scss'

export default function ContactUs() {
  return (
    <div className='containerContactUs'>
        <div className="firstPartContactUs">
            <h2>Join Our 7452 Happy Students Today!</h2>
            <p>Enter description text here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.​</p>
            <button> <Link to={"/registration"}>STAR LEARNING</Link></button>
        </div>
        <div className="SecondPartContactUs">
            <p>Copyright @ 2023 Anjaniaina Devs</p>
        </div>
    </div>
  )
}
