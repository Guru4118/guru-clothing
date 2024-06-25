import g1 from "./img/Accessories/g1.jpg"
import g2 from "./img/Accessories/g2.jpg"
import g3 from "./img/Accessories/g3.jpg"
import g4 from "./img/Accessories/g4.jpg"
function Accessorie()
{
    return(
        <div id="acc">
            <div id="r1">
                <p id="ac">Accessories</p>
                <p><span>Accessories</span> are like <span>vitamins</span> to fashion</p>
            </div>
            <div id="accimg">
                <div className="watchim">
                <img src={g1} alt="" />
                <div className="txtonacc">
                    <p>Product : Watch</p>
                    <p>Cost : 15000
                        <p>Product Code : W1ac</p>
                    </p>
                </div>
                </div>


                <div className="watchim">
                <img src={g2} alt="" />
                <div className="txtonacc">
                    <p>Product : Ring</p>
                    <p>Cost : 150
                        <p>Product Code : R2ac</p>
                    </p>
                </div>
                </div>


                <div className="watchim">
                <img src={g3} alt="" />
                <div className="txtonacc">
                    <p>Product : Hand Bag</p>
                    <p>Cost : 1500</p>
                        <p>Product Code : h3ac</p>
                    
                </div>
                </div>



                <div className="watchim">
                <img src={g4} alt="" />
                <div className="txtonacc">
                    <p>Product : Neck Chain</p>
                    <p>Cost : 1000</p>
                        <p>Product Code : n4ac</p>
                    
                </div>
                </div>
                



               
            </div>
        </div>
    )
}
export default Accessorie