import React from 'react'
import { useState,useEffect } from 'react';
import Card from '../Card/Card';
import Pages from '../../pages/Pages';
import './Popular.css';


function Popular() {
  const getDishType =()=>{
    const url = window.location.href;
    const urlParts = url.split('/');
    const text = urlParts[urlParts.length - 1];
    if(text===" "){
      return "Starter";
    }
    else if(text==="dessert"){
      return "Desserts";
    }
    else if(text==="beverage"){
      return "Drinks";
    }
    else{
      return "Soup";
    }
  }
  const [recipes,setRecipes] = useState([])
  useEffect(()=>{
    getRecipe(getDishType());

  },[Pages])

  
  const getRecipe= async (type)=>{
    const REACT_API_KEY ="e7704039751459e8dcd58cbf1daabddc"; //edamam api
    const dataArr =[];
    try{
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=popular&app_id=af124d04&app_key=${REACT_API_KEY}&dishType=${type}`);
      const data = await response.json();
      for(let i=0;i<12;i++){
          dataArr.push(data.hits[i]);
      }
      setRecipes(dataArr);
      console.log(dataArr);
      console.log(recipes);
    }
    catch(e){
      console.log(e);
    }
    
  }
  
  return (
    <div className='Popular'>
      {recipes.map((recipe,index)=>{
        return(
          <Card key={index} recipe={recipe}/> 
        )})}
    </div>
  )
}

export default Popular;