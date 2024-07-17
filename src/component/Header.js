import { Url_logo } from "../utils/constants";
import { useState } from "react";
const Header = ()=>{
    const [btnnamereact, setbtnnamereact]=useState("login");
    return(<div className="header">
        <div className="logocontainer">
        <img
         className="logo"
        src={Url_logo}/>
        </div>
        <div className="navbar">
            <ul>
                <li>Home</li>
                <li>
                  <a href="/about"> About us</a> 
                    </li>
                <li>Contact</li>
                <li>Cart</li>
                <button 
                className="login"
                onClick={ ()=>{
                    btnnamereact ==="login"? setbtnnamereact("logout") :
                    setbtnnamereact("login")
                }

                }
                >
               {btnnamereact}
                </button>
            </ul>
        </div>
  
    </div>
    );
  };
export default Header;