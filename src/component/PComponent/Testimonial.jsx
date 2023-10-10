import React from 'react'
import {Portrait1, Portrait2, Portrait3, Portrait4} from '../../asset/index'
import './testimonial.scss'

export default function Testimonial() {
    const avis =[
        {'id' :1 , 'Avis':'Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.','portrait':Portrait1, 'name': 'Kevin Black', 'emplacement':'Dallas, Usa'},
        {'id' :2 , 'Avis':'Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.','portrait':Portrait2, 'name': 'Zasha Swan', 'emplacement':'Australia'},
        {'id' :3 , 'Avis':'Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.','portrait':Portrait3, 'name': 'Frank Jones', 'emplacement':'Japan'},
        {'id' :4 , 'Avis':'Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.','portrait':Portrait4, 'name': 'Jack Brownn', 'emplacement':'London, UK'}
    ]
  return (
    <div className='containerTestimonial'>
        <div className="titleTestimonial">
            <h2>What Our Students Have To Say</h2>
        </div>
        <div className="AvisSpace">
                {avis.map(function(e){
                    return(
                    <div className="cardAvis" key={e.id}>
                        <p>{e.Avis}</p>
                        <div className="student">
                            <img src={e.portrait} alt={`profil étudiant `+ e.id} />
                            <div className="details">
                                <p className="name">{e.name}</p>
                                <p className="emplacement">From {e.emplacement}</p>
                            </div>
                            
                        </div>
                    </div> 
                    )
                })}
              
        </div>
    </div>
  )
}
