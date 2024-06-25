import { useState } from "react";
import React from "react";

function Men()
{
    return(
        <div id="mens">
            <div id="m">

                <p id="pm">Men</p>
                <p id="pf">" Forget The Rule " </p>
                <p id="pfs">Wear iT tHe <span id="s1">wAy YoU LikE iT</span></p>

            </div>

            <div id="m2">


            <div className="menimgcon">
                <img id="img1" src="img/men/m11.jpg" alt="" />
                <div className="txtonmenimg"> 
                <p>Winter Wear</p>
                <p>Cost : 7500</p>
                <p>Model Wearing : Size M</p>
                <p>Product Code : m1w </p>

                </div>
                </div>

                <div className="menimgcon">
                <img src="img/men/m2.jpg" alt="" />

                <div className="txtonmenimg"> 
                <p>Free Style</p>
                <p>Cost : 8000</p>
                <p>Model Wearing : Size M</p>
                <p>Product Code : m2f </p>

                </div>
                </div>


                <div className="menimgcon">
                <img id="img1" src="img/men/m3.jpg" alt="" />
                <div className="txtonmenimg"> 
                <p>Street Wear</p>
                <p>Cost : 3500</p>
                <p>Model Wearing : Size S</p>
                <p>Product Code : m3s </p>

                </div>
                </div>
                

                
                


            </div>

            <div id="m33">
                <div className="hoodimg">
                <img src="img/men/m33.jpg" id="hoodie"alt="" />
                <div id="txtonhood"><p>Hoodies And Sweatshirts</p>
                <p>Cost : 2500</p>
                <p>Product Code : H11 </p>
                </div>
                </div>
            </div>



            <div id="m2">
                <div className="menimgcon">
                <img id="img1" src="img/men/m00.jpg" alt="" />
                <div className="txtonmenimg">
                <p>Formals</p>
                <p>Cost : 2700</p>
                <p>Model Wearing : Size S</p>
                <p>Product Code : m5f </p>
                </div>
                </div>


                <div className="menimgcon">
                <img src="img/men/m22.jpg" alt="" />

                <div className="txtonmenimg">
                <p>Beach Wear</p>
                <p>Cost : 3500</p>
                <p>Model Wearing : Size L</p>
                <p>Product Code : m6b </p>
                </div>
                </div>


                <div className="menimgcon">
                <img src="img/men/m23.jpg" alt="" />
                <div className="txtonmenimg">
                <p>Suit</p>
                <p>Cost : 5600</p>
                <p>Model Wearing : Size M</p>
                <p>Product Code : m7s </p>
                </div>
                </div>


            </div>
            

 
        </div>
    )

}
export default Men