
import "./Header.css"
import logo from "../../static/img/logo.png"
import Cookies from 'js-cookie';



function Header(){

    return (
        <div>
          <div class="header" >
            <div class="logo-header">
                <img src={logo} alt="logo"/>
            </div>
            <div class="search-header">
                <div class="search-header-box">
                    <input id="search-box" placeholder="Search here">
                    </input>  
                </div>
                
            </div>
        </div>  
        </div>
        
    )
    
}
export default Header()