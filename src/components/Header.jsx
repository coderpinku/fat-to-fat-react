import React from "react";
import Typed from 'react-typed';
// import {show} from "./script";



export default function Header(){
    return(
       <header>
                      
         <div className="header-content">
            <h2>We care About Your Fitness!</h2>
            <h1>Be strong</h1>
            <Typed
                    strings={['Stronger than Yesterday','Get comfortable with being uncomfortable!','Look in the mirror. That’s your competition']}
                    typeSpeed={50}
                    backSpeed ={40}
                    loop
                     
                >
                    </Typed>
                    <br/>
            <button>EXPLORE PASS</button>            
        </div>
        </header>
        
    )
}