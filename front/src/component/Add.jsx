import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "../App.css"
const Add = () => {
    const[name,setName]=useState("")
    const[age,setAge]=useState("")
    const navigate=useNavigate()
    console.log(name,age)
    
    const handleSubmit=()=>{
        const newEmployee={
            name: name,
            age: age
        }   
        axios.post("http://localhost:8800/employee",newEmployee).then(()=>navigate("/"))
    }

  return (
    <div className='form'>
       <h1>add a new Employee</h1>
       <input type="text" placeholder="name" onChange={e=>setName(e.target.value)}/>
       <input type="number" placeholder="age" onChange={e=>setAge(e.target.value)}/>
       <button className='btn'  onClick={handleSubmit}>add employee</button>
    </div>
  )
}

export default Add
