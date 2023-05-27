import React from 'react';
import '../../style/Filter.css'

function Filter({icon, libelle, CssClass, onClick}) {
  return (
    <div className={ `filter ${CssClass}` } onClick={onClick}>
        <img src={icon} className="filter_icon" alt="icon" />
        <span className='filter_libelle'>{libelle}</span>
    </div>
  )
}

export default Filter