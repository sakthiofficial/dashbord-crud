import React from 'react';

import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router';

export function TeacherForm() {
  let[name,setname]=useState("")
  let[subject,setsubject]=useState("")
  let[age,setage]=useState("")
  let navigate = useNavigate()


  let teacherInfo ={
 name:name,
 subject:subject,
 age:age
  }
  let postData =()=> {
    let teacherData = JSON.stringify(teacherInfo);
  console.log(teacherData);
    fetch("https://63899fdc4eccb986e895a926.mockapi.io/teachers", {
      method: "POST",
     
      body: teacherData,
      headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })
      
      .then((response) => navigate("/teacher"));
  };
  return (
   <div className="student-form">
    <form>
      <div className="form-text">
      <h1>Teacher Details</h1>
      </div>
    <TextField id="outlined-basic" value = {name}  onChange={(e)=>setname(e.target.value)} required label="Name" variant="outlined" />
    <TextField id="outlined-basic" value = {subject}  onChange={(e)=>setsubject(e.target.value)} required label="Subject" variant="outlined" />
    <TextField type= "number" id="outlined-basic" value = {age}  onChange={(e)=>setage(e.target.value)} required label="Age" variant="outlined" />
     
   
     <div className="btn">
     <Button onClick={()=>postData()} variant="contained" >
        SUBMIT
      </Button>
     </div>

    </form>
   </div>
    );
}