import React from 'react'
import './Card.css';
import { useState,useEffect } from 'react';
import Detail from '../Detail/Detail.js';

function Card({recipe}) {
  const [openDetail,setOpenDetail] = useState(false);
  
  const toggleDetail=()=>{
    setOpenDetail(!openDetail);
  }
  console.log(openDetail);
  return (
    <div className='Card' onClick={toggleDetail}>
        <img src={recipe.recipe.images.SMALL.url}/>
        <p>{recipe.recipe.label}</p>
        {openDetail&&<Detail recipeLabel={recipe.recipe.label} imgSrc={recipe.recipe.images.REGULAR.url} ingredients={recipe.recipe.ingredients} closeDetail={toggleDetail}/>}
    </div>
  )
}

export default Card