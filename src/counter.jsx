import React,{useState} from "react";

function Home()
{
    return(
        <div>
            <div id="top">
            

           


            </div>
            <div id="show">
                <div className="image-container">
                    <img src="img/s1.jpg" alt="Image 1" />
                    <div className="text-overlay">Discover the latest trends!</div>
                </div>
                <div className="image-container">
                    <img src="img/s2.jpg" alt="Image 2" />
                    <div className="text-overlay">Shop our new collection!</div>
                </div>
                <div className="image-container">
                    <img src="img/s3.jpg" alt="Image 3" />
                    <div className="text-overlay">Unleash your style!</div>
                </div>
            </div>
            <div>
                <p id="txt1"> Stay unique! <span id="txt2">Stay rare!</span></p>
            </div>

            <div id="bimg">
                <div className="bigimgcontainer">
                <img id="bimgm"src="img/a2.jpg" alt="" />
                <div id="textonimg">Live Sale!</div>
                </div>
                

            </div>
        </div>
    )
}
export default Home