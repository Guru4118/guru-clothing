import React,{useState} from "react";
import s1Image from './img/s1.jpg';
import s2Image from './img/s2.jpg';
import s3Image from './img/s3.jpg';
import a2Image from './img/a2.jpg';


function Home()
{
    return(
        <div>
            <div id="top">
            

           


            </div>
            
            <div id="show">
                <div className="image-container">
                <img src={s1Image} alt="" />
                    <div className="text-overlay">Discover the latest trends!</div>
                </div>
                <div className="image-container">
                <img src={s2Image} alt="" />
                    <div className="text-overlay">Shop our new collection!</div>
                </div>
                <div className="image-container">
                <img src={s3Image} alt="" />
                    <div className="text-overlay">Unleash your style!</div>
                </div>
            </div>
            <div>
                <p id="txt1"> Stay unique! <span id="txt2">Stay rare!</span></p>
            </div>

            <div id="bimg">
                <div className="bigimgcontainer">
                <img id="bimgm"src={a2Image} alt="" />
                <div id="textonimg">Live Sale!</div>
                </div>
                

            </div>
        </div>
    )
}
export default Home