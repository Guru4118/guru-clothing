import wm111 from "./img/women/wm111.jpg"
import wm2 from "./img/women/wm2.jpg"
import wm3 from "./img/women/wm3.jpg"
import wm33 from "./img/women/wm33.jpg"
import wm00 from "./img/women/wm00.jpg"
import wm22 from "./img/women/wm22.jpg"
import wm23 from "./img/women/wm23.jpg"



function Women()
{
    return(
        <div id="wmens">
        <div id="wm">

            <p id="wpm">Women</p>
            <p id="wpf">" Life Is Too Short " </p>
            <p id="wpfs">To WeaR <span id="ws1">BoORinG CloTHeS </span></p>

        </div>

        <div id="wm2">
            <div className="womencon">
            <img id="wimg1" src={wm111} alt="" />
            <div className="txtonwomen">
            <p>Airpot Look</p>
                <p>Cost : 8600</p>
                <p>Model Wearing : Size S</p>
                <p>Product Code : wm0a </p>

            </div>
            </div>

            <div className="womencon">
            <img src={wm2} alt="" />
            <div className="txtonwomen">
            <p>Free Style</p>
                <p>Cost : 2600</p>
                <p>Model Wearing : Size M</p>
                <p>Product Code : wm01s </p>

            </div>
            </div>


            <div className="womencon">
            <img src={wm3} alt="" />
            <div className="txtonwomen">
            <p>Party Wear</p>
                <p>Cost : 6000</p>
                <p>Model Wearing : Size M</p>
                <p>Product Code : wm02p </p>

            </div>
            </div>


        </div>

        <div id="wm33">
            <div className="old">
            <img src={wm33} id="whoodie"alt="" />
            <div className="oldwomen">
            <p>Old Money </p>
                <p>Cost : 9700</p>
                <p>Model Wearing : Size S</p>
                <p>Product Code : wm04o </p>

            </div>
            </div>
        </div>
        <div id="wm2">
            



            <div className="womencon">
            <img id="wimg1" src={wm00} alt="" />
            <div className="txtonwomen">
            <p>Free Style</p>
                <p>Cost : 6000</p>
                <p>Model Wearing : Size M</p>
                <p>Product Code : wm7f </p>

            </div>
            </div>
            <div className="womencon">
            <img src={wm22} alt="" />
            <div className="txtonwomen">
            <p>Street Wear</p>
                <p>Cost : 6000</p>
                <p>Model Wearing : Size M</p>
                <p>Product Code : wm8s </p>

            </div>
            </div>
            <div className="womencon">
            <img src={wm23} alt="" />
            <div className="txtonwomen">
            <p>Formals</p>
                <p>Cost : 6000</p>
                <p>Model Wearing : Size M</p>
                <p>Product Code : wm9f </p>

            </div>
            </div>


        </div>
        


    </div>

    )
}

export default Women
