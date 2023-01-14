import React from "react";
import card1 from "../img/card1.jpg"
import card2 from "../img/card2.jpg"
import card3 from "../img/card3.jpg"

export default function CardContent(){
    return(
        
            
        <div className="card-content">
            <div className="cards-h1">
            <h1>FITNESS PASS</h1>   
            </div>
            <div className="cards">
            <div className="card">
                <div className="box">
                    <img src={card1}></img>
                    <span>EXPLORE</span><br></br>
                    <span className="span-pass">ELITE</span>    
                </div>
                <div className="box">   
                <h1>Unlimited Access to..</h1>
            <ul>
                <li>At Center group classes</li>
                <li>ALL ELITE & PRO gyms</li>
                <li>At Home Live Workout</li>
            </ul>
                <div className="btn">
                    <button className="spacial-btn">TRY FOR FREE</button>
                    <button className="card-btn">LEARN MORE</button>
                </div>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <img src={card2}></img>
                    <span>EXPLORE</span><br></br>
                    <span className="span-pass">PRO</span>    
                </div>
                <div className="box">
                <h1>Unlimited Access to..</h1>
            <ul>
                <li>4 Seasons group classes</li>
                <li>ALL PRO gyms</li>
                <li>At Home Live Workout</li>
            </ul>
            <div className="btn">
                    <button className="spacial-btn">TRY FOR FREE</button>
                    <button className="card-btn">LEARN MORE</button>
                </div>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <img src={card3}></img>
                    <span>EXPLORE</span><br></br>
                    <span className="span-pass">LIVE</span>    
                </div>
                <div className="box">
                <h1>Unlimited Access to..</h1>
            <ul>
                <li>Celebrity Workout</li>
                <li>Goal based workout</li>
                <li>At Home Workout</li>
            </ul>
            <div className="btn">
                    <button className="spacial-btn">TRY FOR FREE</button>
                    <button className="card-btn">LEARN MORE</button>
                </div>
                </div>
            </div>  
        </div>
        </div>             
    )
}