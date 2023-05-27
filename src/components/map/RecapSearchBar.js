import React from 'react'
import '../../style/RecapSearchBar.css'
import IconBack from '../../images/svg/icon-chevron.svg'
import IconSeparator from '../../images/svg/icon-separator.svg'
import IconFlag from '../../images/svg/icon-flag.svg'
import IconMarker from '../../images/svg/icon-marker.svg'

function RecapSearchBar({setStep, destinationSelected, destinationGeneralSelected}) {

  const short = (str, length) => {
    if (str.length <= length) {
        return str; 
    } else {
        var shortStr = str.substring(0, length); 
        shortStr += "..."; 
        return shortStr;
    }
  };
  return (
    <div className='recap_searchbar'>
        <div className='content_top'>
            <img 
                src={IconBack} 
                className="icon_back" 
                alt="back"  
                onClick={() => setStep(1)}
            />
            <div className='destinations'>
                <div className='general'>
                    <img src={IconMarker} className="icon_marker" alt="icon" />
                    {destinationGeneralSelected.name}</div>
                <div className='separator'>
                    <img src={IconSeparator} className="icon_separator" alt="icon" />
                </div>
                <div className='final'>
                    <img src={IconFlag} className="icon_flag" alt="icon" />
                    {short(destinationSelected.name, 20)}
                </div>
            </div>
        </div>
        <div className='content_bottom'>
            <p>Trouvez un groupe avec qui vous déplacer !</p>
        </div>
    </div>
  )
}

export default RecapSearchBar