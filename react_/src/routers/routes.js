import React from 'react'
import { Route,Router,Routes } from 'react-router'
import CaseStudy from '../components/case-study/case-study'
import Displaygooglemaps from '../components/googlemap/displaygooglemaps'
import Home from '../components/home/home'
import Products from '../components/products/products'
import { Potholes } from '../potholes/components/potholes/potholes'
import GoogleApiWrapper from "../potholes/components/potholes/potholes";
import { DisplayPotholeInMap } from '../potholes/components/potholes/displaypotholeinmap'


export default function Routes_(){
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home /> }></Route>
            <Route path='/products' element={<Products />} exact></Route>
            <Route path='/case-study/driver-license-verification' element={<CaseStudy />} exact></Route>
            <Route path='/maps' element={<Displaygooglemaps />} exact></Route>
            <Route path='/potholes' element={<DisplayPotholeInMap />}></Route>
        </Routes>
    </div>
  )
}
