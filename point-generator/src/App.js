import { useState } from 'react';
import './App.css';

function App() {
  const [points,setPoints] = useState([]);
  const [removedPoints,setRemovedPoints] = useState([]);
  function undoBtn(e){
    e.stopPropagation();
    const newArr = [...points];
    const lastItem=newArr.pop();
    setRemovedPoints((removedPoints)=>{
      return [...removedPoints,lastItem];
    })
    
    setPoints(newArr);
   
    
  }
  const redoBtn =(e)=>{
    e.stopPropagation();
    const d =[...removedPoints];
    const item = d.pop();
    setPoints((points)=>{
      return [...points,item];
    })
    setRemovedPoints(d);
    
    
  }
  
  const randomBtn =(e)=>{
    e.stopPropagation();
    const maxX = window.innerWidth;
    const maxY = window.innerHeight;
    setPoints((points)=>{
      return [...points,{
        x:Math.floor(Math.random(0,1)*maxX),
        y:Math.floor(Math.random(0,1)*maxY)
      }]
    })
  }
  
  const handleCreateClick=(e)=>{
    console.log(e.clientX);
    console.log(e.clientY);
    setPoints((points)=>{
      return [...points,{
        x:e.clientX,
        y:e.clientY
      }];
    })
  }
  return (
    <div className="App" onClick={handleCreateClick}>
      <div className='buttons'>
        <button disabled={points.length==0} onClick={undoBtn} >Undo</button>
        <button disabled={removedPoints.length==0} onClick={redoBtn} >Redo</button>
        <button onClick={randomBtn}>Random</button>
      </div>
     
        {
          points.map((point,index)=>{
            return (
            <div className='point' key={index} style={{left:point.x, top:point.y}}></div>
            )
          })
        }
      

    </div>
  );
}

export default App;
