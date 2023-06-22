import React from 'react';
import './Detail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect } from 'react';

function Detail({recipeLabel,imgSrc,ingredients,closeDetail}) {
  
  
  const closeDetailBtn =()=>{
    closeDetail();
  }
  
  return (
    <div className='detailBack'>
      <div className='Detail'>
      <h2>{recipeLabel}</h2>
      <FontAwesomeIcon className='xIcon' icon={faXmark} onClick={closeDetailBtn} />
      <img src={imgSrc}/>
      <div className='ingredient'>
          {ingredients.map((ingredient,index)=>{
            return(
                <p key={index}>{ingredient.text}</p>
            );
          })}
      </div>

    </div>
    </div>
    
  )
}

export default Detail