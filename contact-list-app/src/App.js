import { useState,useEffect}from 'react';
import SearchBar from './components/SearchBar';
import List from './components/List';
import Form from './components/Form';
import './App.css';

function App() {
  
  const [contacts,setContacts] =useState([]);
  
  const [searchData,setSearchData] = useState("");
  
  useEffect(()=>{
    console.log(contacts);
    
    console.log("contacts güncellendi");
    console.log(searchData);   
  },);
  
  const onDelete =()=>{
    const newContacts= contacts.splice(0,(contacts.length)-1);
    
    setContacts(newContacts);
    
  }
  
  return (
    <div className="App">
      <h2>Contact App</h2>
      <SearchBar getValue={setSearchData}/>
      <List results = {contacts} searchData={searchData} onDelete={onDelete}/>
      <Form contactList ={contacts} addContact ={setContacts}/>
      <button onClick={onDelete}>Delete</button>
      
      
    </div>
  );
}

export default App;
