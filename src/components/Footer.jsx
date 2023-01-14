import React from "react";


export default function Footer(){
    return(
        <footer>
            <div className="footer-col">
                <h1>Company</h1>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Career  </a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact </a></li>
                </ul>    
            </div>
            <div className="footer-col">
                <h1>Get Help</h1>
                <ul>
                    <li><a href="#"> Affiliate       </a></li>
                    <li><a href="#"> Shop            </a></li>
                    <li><a href="#"> Store           </a></li>
                    <li><a href="#"> Fitness Glossary</a></li>
                </ul>    
            </div>
            <div className="footer-col">
                <h1>Product</h1>
                <ul>
                    <li><a href="#">Yoga        </a></li>
                    <li><a href="#">Gyms        </a></li>
                    <li><a href="#">HIIT Workout</a></li>
                    <li><a href="#">Exercises   </a></li>
                </ul>    
            </div>
            <div className="footer-col">
                <h1>Follow Us</h1>
                <ul>
                    <li><a href="#">Facebook </a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter  </a></li>
                    <li><a href="#">LinkedIn </a></li>
                </ul>    
            </div>
        </footer>
    )
}