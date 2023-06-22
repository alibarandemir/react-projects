import React from 'react'
import { useState } from 'react'

export default function SearchBar(props) {
  const [searchTerm,setSearchTerm] = useState("");
  
  
  const onChange= (e)=>{
    setSearchTerm(e.target.value)
    if(searchTerm===""){
      props.getValue("");
    }
    else {
    props.getValue(searchTerm);
    }

  }
  
  return (
    <div>
      <input type='text' placeholder='Search'  onChange={onChange}/>
    </div>
  )
}
