import React, { useEffect, useState } from 'react';
import { json, useNavigate } from 'react-router';
import AutorenewSharpIcon from '@mui/icons-material/AutorenewSharp';
import Button from '@mui/material/Button';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';

export function Student() {

 let[Student,setStudent] = useState(null)
function getData (){
  fetch("https://63899fdc4eccb986e895a926.mockapi.io/sampleapi").then(val=>val.json()).then(dt => setStudent(dt))

}
 useEffect(()=>getData,[])
 return(
<div className='student-page'>
{Student ? <StudentInfo getData ={getData}data ={Student}/> :<p  className='refreshIcon'>< RefreshIcon  /></p>}

</div>
  )
}
function StudentInfo({data,getData}){
  let navigate = useNavigate()
let deleteData =(ele)=>{
  fetch(`https://63899fdc4eccb986e895a926.mockapi.io/sampleapi/${ele}`,{
   method:"DELETE"
  }).then(()=>getData())

}
  return (
    <div className='student-cont'>
     <div className='create-btn'>
     <Button variant="outlined" onClick={()=>navigate("/studentform")} >Add Student</Button>
     </div>
      <table>
        <thead>
          <tr>
            <th>STUDENT NAME</th>
            <th>CLASS</th>
            <th>AGE</th>
            {/* <th>EDIT</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map(val=>{
 return(
  <tr>
 <td>{val.name}</td>
 <td>{val.class}'th</td>
 <td>{val.age}</td>
 <td className='btn'><Button onClick={()=>navigate(`studentupdate${val.id}`)}><ModeEditOutlineTwoToneIcon/>Update</Button> <Button onClick={()=>deleteData(val.id)}>Delete<DeleteOutlineOutlinedIcon/></Button></td>

</tr>
 )
          })}
         
         

        </tbody>
      </table>

    </div>
  );
}

