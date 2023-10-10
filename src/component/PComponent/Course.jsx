import React from 'react'
import { Course1, Course2, Course3 } from '../../asset'
import './Course.scss'

export default function Course() {
    const courseListe = [
        {'id':1,'img': Course1,'title' : 'Forex Trading','alt':'cours numéro 1','price':100,'details':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac eros ut dui bibendum ultricies. Maecenas egestas fringilla semper.','button':'See More'},
        {'id':2,'img': Course2,'title' : 'Action Trading','alt':'cours numéro 2','price':100,'details':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac eros ut dui bibendum ultricies. Maecenas egestas fringilla semper.','button':'See More'},
        {'id':3,'img': Course3,'title' : 'Indice Trading','alt':'cours numéro 3','price':100,'details':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac eros ut dui bibendum ultricies. Maecenas egestas fringilla semper.','button':'See More'},
    ]
  return (
    <div className='Course'>
        <div className="first">
            <h2>Our Most Popular Courses</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac eros ut dui bibendum ultricies. Maecenas egestas fringilla semper.</p>
        </div>
        <div className="second">
            {courseListe.map(function(e){
                return(
                    <div className="card" key={e.id}>
                        <img src={e.img} alt={e.alt}/>
                        <p className='price'>{e.price}$</p>
                        <div className="text">
                            <h3>{e.title}</h3>
                            <p>{e.details}</p>
                            <button>{e.button}</button>
                        </div>
                    </div>)
                })}
        </div>
    </div>
  )
}
