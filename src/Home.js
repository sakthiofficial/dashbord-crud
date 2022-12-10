import React from 'react';
import IconButton from '@mui/material/IconButton';
import GroupIcon from '@mui/icons-material/Group';
import Button from '@mui/material/Button';
import Person4Icon from '@mui/icons-material/Person4';
import { Navigate } from 'react-router';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useNavigate } from 'react-router';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
 
};

const labels = ["students", "teachers"];

export const data = {
  labels,
  datasets: [
    {
      label:"School Management",
      data: ["100", "150"],
      backgroundColor: "#d81b60"
    },
    
  
  ]
};
export function Home() {
 
  return (
<div className="home-page">
<div className="home-page_btn">
<HomeInfo name={"Student"} path = {"/student"}icon ={<GroupIcon />}/>
<HomeInfo name={"Teacher"}path = {"/teacher"} icon ={<Person4Icon />}/>



</div>
<HomeChart/>

</div>
    );
}
function HomeChart() {
  return <Bar options={options} data={data} />;
}

function HomeInfo({name,icon,path}){
  let navigate = useNavigate()
  return(
<div className="btns">
     
    
  <Button variant="contained" onClick={()=>navigate(path)} endIcon={icon}>
  {name}
</Button>
    </div>
  )
}
