import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router';

export function StudentForm() {
  let[name,setname]=useState("")
  let[classSt,setclassSt]=useState("")
  let[age,setage]=useState("")
  let navigate = useNavigate()


  let studentInfo ={
 name:name,
 class:classSt,
 age:age
  }
  let postData =()=> {
    let studentData = JSON.stringify(studentInfo);
  console.log(studentData);
    fetch("https://63899fdc4eccb986e895a926.mockapi.io/students", {
      method: "POST",
     
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
      <h1>Student Details</h1>
      </div>
    <TextField id="outlined-basic" value = {name}  onChange={(e)=>setname(e.target.value)} required label="Name" variant="outlined" />
    <TextField type= "number" id="outlined-basic" value = {classSt}  onChange={(e)=>setclassSt(e.target.value)} required label="Class" variant="outlined" />
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
