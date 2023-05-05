import React, { useState } from 'react'
 import axios from 'axios'
 import "../App.css"

 const Update = ({e}) => {
    const[name,setName]=useState("")
    const[age,setAge]=useState("")
    const[show,setShow]=useState(false)
    const handleShow=()=>{
        setShow(!show)
    }
    const handleDelete=()=>{
        axios.delete(`http://localhost:8800/employee/${e.id}`)
    }
    const handleUpdate=()=>{
        axios.put(`http://localhost:8800/employee/${e.id}`,{name:name,age:age})
    }
   return (
     <div>
       <button className='btn' onClick={handleDelete}>delete</button>
       <button className='btn' onClick={handleShow}>update</button>
       {show ?
        <>
        <input type="text" placeholder="name" onChange={e=>setName(e.target.value)}/>
       <input type="number" placeholder="age" onChange={e=>setAge(e.target.value)}/>
       <button onClick={handleUpdate} >submit your update</button>
       </>:<div></div>}
       
     </div>
   )
 }
 
 export default Update
 