import React, { useEffect } from 'react';
import  { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from 'react-router';
import RefreshIcon from '@mui/icons-material/Refresh';


export function Studentupdate() {
  let [data,setdata]= useState(null)
  let {id}= useParams()
  let getData= ()=>{
fetch(`https://63899fdc4eccb986e895a926.mockapi.io/students/${id}`).then(res=>res.json()).then(val=>setdata(val))
  }
  useEffect(()=>getData(),[])

return(
  <div className='update-area'>

<div>
{data ? <StudentupdateInfo id={id} data ={data}/> :<p className='refreshIcon'>< RefreshIcon  /></p>}
</div>
</div>
)
}
function StudentupdateInfo({data,id}){ 
  console.log(data)
let[name,setname]=useState(data.name)
  let[classSt,setclassSt]=useState(data.class)
  let[age,setage]=useState(data.age)
  let navigate = useNavigate()
 

  let studentInfo ={
 name:name,
 class:classSt,
 age:age
  }
  let putData =()=> {
    let studentData = JSON.stringify(studentInfo);
    console.log(id)
 
    fetch(`https://63899fdc4eccb986e895a926.mockapi.io/students/${id}`, {
      method: "PUT",
     
      body: studentData,
      headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })
      
      .then((response) => navigate("/student"));
  };
  return (
   <div className="student-form">
    <form>
      <div className="form-text">
      <h1>Student Informations</h1>
      </div>
    <TextField id="outlined-basic" value = {name}  onChange={(e)=>setname(e.target.value)} required label="Name" variant="outlined" />
    <TextField type= "number" id="outlined-basic" value = {classSt}  onChange={(e)=>setclassSt(e.target.value)} required label="Class" variant="outlined" />
    <TextField type= "number" id="outlined-basic" value = {age}  onChange={(e)=>setage(e.target.value)} required label="Age" variant="outlined" />
     
   
     <div className="btn">
     <Button onClick={()=>putData()} variant="contained" >
        SUBMIT
      </Button>
     </div>

    </form>
   </div>
    );
}
