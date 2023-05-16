import React from 'react'
import '../style/Filter.css'

function Filter({icon, libelle, CssClass}) {
  return (
    <div className={ `filter ${CssClass}` }>
        <img src={icon} className="filter_icon" alt="icon" />
        <span className='filter_libelle'>{libelle}</span>
    </div>
  )
}

export default Filter