import React from 'react'
import './HomePage.scss'
import {AboutUs, ContactUs, Course, IntroBanner, Professor, Testimonial, }from'./index'

export default function HomePage() {
  return (
    <div>
        <IntroBanner/>
        <AboutUs/>
        <Course/>
        <Professor/>
        <Testimonial/>
        <ContactUs/>
    </div>
  )
}
