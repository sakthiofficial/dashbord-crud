import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import * as React from 'react';

import React, { useState } from 'react';
import { Home } from './Home';
import { Teacher } from './Teacher';
import { Student } from './Student';
import GroupIcon from '@mui/icons-material/Group';
import Person4Icon from '@mui/icons-material/Person4';
import { StudentForm } from './StudentForm';
import { TeacherForm } from './TeacherForm.1';
import { Studentupdate } from './Studentupdate';
import { TeacherUpdate } from './TeacherUpdate.1';

function App() {
  return (
    <div className="App">


      <BrowserRouter>

        <ul>
          <li><Link to="/">Dash Board</Link></li>

          <li>
            <Link to="/student">Student </Link>
          </li>


          <li><Link to="/teacher">Teacher</Link></li>

        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="teacherform" element={<TeacherForm/>} />

          <Route path="studentform" element={<StudentForm/>} />
          <Route path="student/studentupdate:id" element={<Studentupdate/>} />
          <Route path="teacherupdate:id" element={<TeacherUpdate/>} />




        </Routes>

      </BrowserRouter>
    </div>

  );
 


}
export default App;
