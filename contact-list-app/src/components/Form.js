import { useState } from 'react';
import React from 'react'

export default function Form (props) {
  const [form,setForm] = useState({name:'',number:''})
  const onChangeInput = (e)=>{
        setForm({
          ...form,[e.target.name]:e.target.value,[e.target.name]:e.target.value});
  }
  const onSubmit = (e)=>{
      
      if(form.name==="" & form.number===""){
        return false;
      }
      props.addContact([...props.contactList,form]);
  }
  // const onDelete =()=>{
  //   props.addContact(props.contactList.splice((props.contactList.length)-1,1));
  // }
  return (
    <div>
        <div><input id='name' name='name' placeholder='Enter a Name' onChange={onChangeInput}/></div>
        <div><input id='number' name='number' placeholder='Enter a number' onChange={onChangeInput}/></div>
        <div>
          <button onClick={onSubmit}>Add Person</button>
          {/* <button onClick={onDelete}>Delete Person</button> */}
        </div>

    </div>
  )
}
