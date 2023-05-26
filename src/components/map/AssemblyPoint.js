import React from 'react'
import '../../style/AssemblyPoint.css'
import iconAssemblyPoint from "../../images/svg/icon-assembly-point.svg"

function AssemblyPoint({timer}) {
  return (
    <div className='assembly_point'>
        <img src={iconAssemblyPoint} className='link_icon' alt="point de rassemblement" />
        <span className='timer'>{timer} min</span>
    </div>
  )
}

export default AssemblyPoint