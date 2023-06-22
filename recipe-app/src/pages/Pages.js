import React from 'react'
import Home from './Home';
import Dessert from './Dessert';
import Beverage from './Beverage';
import Soup from './Soup';
import {
  Route,
  Routes,
} from "react-router-dom";

function Pages() {
  return (
    <div>
          
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/dessert' element={<Dessert/>}/>
            <Route path='beverage' element={<Beverage/>}/>
            <Route path='/soup' element={<Soup/>} />
          </Routes>
        
    </div>
  )
}

export default Pages