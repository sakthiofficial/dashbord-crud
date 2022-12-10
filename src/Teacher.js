import React from 'react';
import { useEffect, useState } from 'react';
import { json, useNavigate } from 'react-router';
import AutorenewSharpIcon from '@mui/icons-material/AutorenewSharp';
import Button from '@mui/material/Button';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';

export function Teacher() {

  let[Teacher,setTeacher] = useState(null)
 function getData (){ 
  fetch("https://63899fdc4eccb986e895a926.mockapi.io/teachers").then(val=>val.json()).then(dt =>setTeacher(dt))
 }
  useEffect(()=>{
    getData()
   },[])
 
  return(
 <div className='student-page'>
 {Teacher ? <TeacherInfo  getData={getData} data ={Teacher}/> :<p className='refreshIcon'>< RefreshIcon /></p>}
 
 </div>
   )
 }

export function TeacherInfo({data,getData}) {

  let deleteData =(ele)=>{
    fetch(`https://63899fdc4eccb986e895a926.mockapi.io/teachers/${ele}`,{
      method:"DELETE",
    }).then(()=>getData())
    console.log(ele)
  }
  
  let navigate = useNavigate()

  return (
    <div className='student-cont'>
     <div className='create-btn'>
     <Button variant="outlined" onClick={()=>navigate("/teacherform")} >Add Teacher</Button>
     </div>
      <table>
        <thead>
          <tr>
            <th>TEACHER NAME</th>
            <th>SUBJECT</th>
            <th>AGE</th>
            {/* <th>EDIT</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map(val=>{
 return(
  <tr>
 <td>{val.name}</td>
 <td>{val.subject}</td>
 <td>{val.age}</td>
 <td className='btn'><Button onClick={()=>navigate(`/teacherupdate${val.id}`)}><ModeEditOutlineTwoToneIcon/>Update</Button> <Button onClick={()=>deleteData(val.id)}>Delete<DeleteOutlineOutlinedIcon/></Button></td>


</tr>
 )
          })}
         


        </tbody>
      </table>

    </div>
  );
}


