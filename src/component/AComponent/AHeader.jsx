import React from 'react'
import './AHeader.scss'
import { IoSearch } from "react-icons/io5";

export default function AHeader() {
  return (
    <div className='AHeaderContainer'>
      <div className="searchBar">
        <IoSearch className='IconSearchBar'/>
        <input type="text" placeholder='Search ...'/>
      </div>
      <div className="AvatarUser">
        <img src="#" alt="avatar user" />
      </div>
    </div>
  )
}
