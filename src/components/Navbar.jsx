import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import { GoLocation } from "react-icons/go";
import {FaUser, FaCartArrowDown } from "react-icons/fa";
import { FaTimes } from 'react-icons/fa';



const Navbar = () => {
    const [showMenu, setShowMenu] = React.useState(false)
    function handleClick(){
       setShowMenu(!showMenu)
        console.log("Button was clicked!")
    }

  return (
 <div id="Navbar"> 
             <div className="logo">
             {/* <div className="logo"> */}
                <h1><span>FAtTO.</span>FIT</h1>
            {/* </div> */}
             </div>

    <div className="navbar-items">
        <ul>
            <li><a href="#">FITNESS </a></li>
            <li><a href="#">CARE    </a></li>
            <li><a href="#">ABOUT   </a></li>
            <li><a href="#">STORE   </a></li>
        </ul>
    </div>
    <div className="navbar-items res--nav">
        <ul>    
            <li><a href="#"><GoLocation/></a></li>
            <li className="active"><a href="#">GET APP</a></li>
            <li><a href="#"><FaCartArrowDown/></a></li>
            <li><a href="#"><FaUser/></a></li> 

        </ul>
    </div>
         <div className="hamburger">
            <i onClick={handleClick} className={showMenu ? <GiHamburgerMenu/> : <FaTimes/>}>
                <GiHamburgerMenu/>
                
            </i>
            
         </div>
       
         
 </div> 

  )
}

export default Navbar





