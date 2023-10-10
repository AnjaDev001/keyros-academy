import React from 'react'
import './ANavBar.scss'
import {Link} from 'react-router-dom'
import { FaStudiovinari } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";

export default function ANavBar() {
  const ANavigation = [
    {"id" : 1, "name": "Dashboard", "link": "dashboard"},
    {"id" : 2, "name": "Course", "link": "course"},
    {"id" : 1, "name": "Message", "link": "message"},
    {"id" : 1, "name": "User", "link": "user"},
  ]
  return (
    <div className='ANavBar'>
      <div className="logo">
        <h1><Link to={'dashboard'}><FaStudiovinari/>KEYROS</Link></h1>
      </div>
      <div className="navigation">
        <ul>
          {ANavigation.map(function(e){
            return <li key={e.id}><Link to={e.link}>{e.name}</Link></li>
          })}
        </ul>
      </div>
      <div className="LogoutBtn">
        <p><IoExitOutline/> Log Out</p>
      </div>
    </div>
  )
}
