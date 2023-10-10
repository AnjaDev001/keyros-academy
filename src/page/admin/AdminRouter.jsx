import React from 'react'
import './AdminRoute.scss'
import { Routes, Route } from 'react-router-dom'
import { ALayout,ADashboard, ACourse, AMessage, AUsers } from './index'

export default function AdminRouter() {
  return (
    <Routes>
        <Route element={<ALayout/>}>
            <Route index element={<ADashboard/>}/>
            <Route path='/dashboard' element={<ADashboard/>}/>
            <Route path='/course' element={<ACourse/>}/>
            <Route path='/message' element={<AMessage/>}/>
            <Route path='/user' element={<AUsers/>}/>
        </Route>
    </Routes>
  )
}
