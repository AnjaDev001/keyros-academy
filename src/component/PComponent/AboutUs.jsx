import React from 'react'
import { GiAbstract089,GiArchiveResearch, GiArcheryTarget} from "react-icons/gi";
import './AboutUs.scss'

export default function AboutUs() {
  return (
    <div className='AboutUS'>
        <div className="containerAboutUs">
            <div className="card">
                <GiArchiveResearch className='AboutUSIcon'/>
                <h3>Actionable Training</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="card">
                <GiArcheryTarget className='AboutUSIcon'/>
                <h3>Interesting Quizzes</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="card">
                <GiAbstract089 className='AboutUSIcon'/>
                <h3>Premium Material</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    </div>
  )
}
