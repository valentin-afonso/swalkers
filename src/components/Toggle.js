import React, { useState } from 'react';
import '../style/Toggle.css'

function Toggle() {
  const [isToggled, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!isToggled);
  };

  return (
      <div className='toggle' onClick={handleToggle}>
        <div className={'toggle_switch ' + (isToggled ? 'active' : '')}></div>
      </div>
  )
}

export default Toggle