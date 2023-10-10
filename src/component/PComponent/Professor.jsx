import React from 'react'
import {Ceo} from '../../asset/index'
import './Professor.scss'

export default function Professor() {
  return (
    <div className='containerProfessor'>
        <div className="titleProfessor">
            <h2>Be In Demand With Our Professional Training</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac eros ut dui.</p>
        </div>
        <div className="second">
            <div className="aside">
                <img src={Ceo} alt="profil du professor" />
                <p>Dr. John Smith - Founder & CEO</p>
            </div>
            <div className="section">
                <div className="article">
                    <h3>Build Relevant Skills</h3>
                    <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className="article">
                    <h3>Get The Right Path From The Best Learning Platform</h3>
                    <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className="article">
                    <h3>Learn From The Professionals</h3>
                    <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
