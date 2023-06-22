import React from 'react'
import { useEffect } from 'react';
import "./List.css";


export default function List(props) {
  const filteredData = props.results.filter((item)=>{
    return item.name.toLowerCase().includes(props.searchData.toLowerCase())
  });
  return (
    <div>
      <ul>
      {filteredData.length === 0
          ? props.results.map((person, key) => (
              <li key={key}> {person.name}</li>
            ))
          : filteredData.map((person, key) => (
              <li key={key}> {person.name}</li>
            ))}
          


      
      
      </ul> 
        
      
    </div>
  )
}
