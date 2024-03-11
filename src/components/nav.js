import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import Logo from '../img/JobSecret Logo (2) 1.png'
import  Close  from '../img/ion_close-outline.png'
import '../style/nav.css'

const Nav = ()=>{
    const [isNavVisible, setIsNavVisible] = useState(false);
    const toggleNav = ()=>{
        setIsNavVisible(!isNavVisible)
        console.log(isNavVisible)
    }
    return(
        <div className="nav-con">
            <div className="mobile-nav">
                <div className="logo-container">
                    <img src={Logo} alt="JobSecret Logo"/>
                    <h1 id="logo">JobSecret</h1>
                </div>
            
                
                
                {!isNavVisible? 
                <FaBars className="custom-icon" onClick={toggleNav} />:
                <img src={Close} alt='close' className="custom-icon" onClick={toggleNav}/> }
            </div>
            
            <div className={`dropdown ${isNavVisible ? 'visible' : ''}`}>
               
               <li className="mobile-items"><a href="/">Home</a></li>
               <li className="mobile-items"><a href="about">About Us</a></li>
               <li className="mobile-items"><a href="activities">Our Activities</a></li>
               <li className="mobile-items"><a href="notFound">Contact Us</a></li>
           </div>
            
           
            
            <ul className="nav-items">
            
            <li className="menu-items desktop-only">
                <a href="/">Home</a>
            </li>
            <li className="menu-items desktop-only">
                <a href="/about">About Us</a>
            </li>
            <li className="menu-items desktop-only">
                <a href="/activities">Our Activities</a>
            </li>
            </ul>
            
            
            <div className="contact">
                <a href="/notFound">Contact Us</a>
            </div> 
            
        </div>
    )
}

export default Nav