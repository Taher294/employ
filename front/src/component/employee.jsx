import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import Update from './Update'
import "../App.css"

const Employee = () => {
    const [Employee,setEmployee] = useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:8800/employee").then(res=> setEmployee(res.data))
    },[])
    
    return(
        <div>
            <button className='btn'  onClick={()=>navigate("/add")}>Add Employee</button>
            {Employee.map((e,index)=>(
                <div key={index}>
                    <p>{e.name}</p>
                    <p>{e.age}</p>
                   <Update e={e}/>
                </div>
            ))}
        </div>
    )
}
export default Employee
