import { isContentEditable } from "@testing-library/user-event/dist/utils";
import React from "react";
import appstore from "../img/app-store-dark-card-2.jpg"
import playstore from "../img/play-store-dark-card-2.jpg"


export default   function AppsCom(){
    return(
        <div className="app-content">
            
                
                <div className="content">
                <h1>Download the most loved fitness App</h1>
                <p>Start your Fitness Journey with us. Join the <span>FatTo.fit</span></p>
                
                    <img src={appstore}></img>
                    <img src={playstore}></img>
              
                </div>
                <div className="newsletter">
                    <h1>Get Latest Updates</h1>
                    <p>lorem lipsum dummy content is the latest <span>privacy policy!</span> </p>
                    <div>
                    <input type="text" name="name" />
                    <button>NOTIFY ME</button>
                    </div>

                </div>
            </div>
    )
}