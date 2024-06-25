import { useState } from "react";

function Buy()
{
    function order()
        {
            var name = document.getElementById("cname").value;
            var pno = document.getElementById("cnumber").value;

            var mail = document.getElementById("cmail").value;

            var product = document.getElementById("cproduct").value;

            var address = document.getElementById("address").value;

            if(name=="")
                {
                    alert("Fill All Constraints");

                }
            else if(pno =="")
                {
                    alert("Fill All Constraints");


                }
                else if(mail =="")
                    {
                        alert("Fill All Constraints");

                        
    
    
                    }
                    else if(product =="")
                        {
                            alert("Fill All Constraints");

        
        
                        }
                        else if(address =="")
                            {
                                
                                alert("Fill All Constraints");

            
            
                            }
                            else{
                                document.getElementById("result").innerHTML="order successfull !";
                                alert("order successfull !");
                                setTimeout(function()
                                
                                {
                                    document.getElementById("result").innerHTML="";


                                    
                                }, 2000);


                                


                            }
                            res
                    

        }
    return(
        
        <div className="bb">
        
        <div>
            <div> <p id="topicbuy">" pAsSioN <span id="spanbuy">foR</span> FaSsiOn "</p></div>
            <div id="buytit">
                <h1>Buy Product</h1>
            </div>
            <form action="" id="bform">

                <table>
                    <tr>
                        <td>Name :</td>
                        <td><input type="text" id="cname" placeholder="Name"/></td>
                    </tr>
                    <tr>
                        <td>Phone Number :</td>
                        <td><input type="text" id="cnumber" placeholder="Phone Number" /></td>
                    </tr>
                    <tr>
                        <td>Email id :</td>
                        <td><input type="text" id="cmail" placeholder="Email id" /></td>
                    </tr>
                    <tr>
                        <td>Product Code :</td>
                        <td><input type="text" id="cproduct" placeholder="Product Code" /></td>
                    </tr>
                    <tr>
                        <td>Address :</td>
                        <td><textarea name="add" id="address" placeholder="Address"></textarea></td>
                    </tr>
                    <tr>
                        <td colSpan="2">                        <input type="button" id="bbutton" name="Buy" value="Buy" onClick={order}/></td>
                    </tr>

                </table>
            </form>
            <p id="result"></p>
        </div>

        </div>

    )
}
export default Buy