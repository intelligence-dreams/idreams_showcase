import React from 'react'
import { Route,Router,Routes } from 'react-router'
import CaseStudy from '../components/case-study/case-study'
import Home from '../components/home/home'
import Products from '../components/products/products'

export default function Routes_(){
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home /> }></Route>
            <Route path='/products' element={<Products />} exact></Route>
            <Route path='/case-study/driver-license-verification' element={<CaseStudy />} exact></Route>
            
        </Routes>
    </div>
  )
}
