import React, { useState } from 'react';
import "../style/Navbar.css";
import { Link } from "react-router-dom";
import profile from '../images/svg/profile.svg';
import profileFilled from '../images/svg/icon-profile-filled.svg';
import home from '../images/svg/home.svg';
import homeFilled from '../images/svg/icon-home-filled.svg';
import params from '../images/svg/params.svg';
import paramsFilled from '../images/svg/icon-parametre-filled.svg';
import myjourneys from '../images/svg/my-journeys.svg';
import myjourneysFilled from '../images/svg/icon-historique-filled.svg';

const Navbar = () => {
const [activeIcon, setActiveIcon] = useState('');

const filledIcon = (icon) => {
setActiveIcon(icon);
};

const renderIcon = (icon, alt, filledIconSrc, emptyIconSrc) => {
const isActive = activeIcon === icon;
const iconSrc = isActive ? filledIconSrc : emptyIconSrc;
return (
<img src={iconSrc} className='link_icon' alt={alt} />
);
};

return (
<div className='navbar'>
    <ul>
        <li>
            {renderIcon('home', 'home', homeFilled, home)}
            <Link to="/" className='link_libele' onClick={() => filledIcon('home')}>Home</Link>
        </li>
        <li>
            {renderIcon('journeys', 'my journeys', myjourneysFilled, myjourneys)}
            <Link to="/my-journeys" className='link_libele' onClick={() => filledIcon('journeys')}>Mes trajets</Link>
        </li>
        <li>
            {renderIcon('profile', 'profile', profileFilled, profile)}
            <Link to="/profile" className='link_libele' onClick={() => filledIcon('profile')}>Mes infos</Link>
        </li>
        <li>
            {renderIcon('params', 'params', paramsFilled, params)}
            <Link to="/params" className='link_libele' onClick={() => filledIcon('params')}>Paramètre</Link>
        </li>
    </ul>
</div>
);
};

export default Navbar;