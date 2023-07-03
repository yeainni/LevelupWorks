import React from 'react'
import Sidebar from './Sidebar';
import StudentBuilder from '../Pages/StudentBuilder';


function Intructions() {
  return (
    <div>
      <StudentBuilder>
        <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "150px", color: "Blue" }}>
          Intructions
        </h1>
      </StudentBuilder>
    </div>
  )
}

export default Intructions