
import "./Header.css"
import logo from "../../static/img/logo.png"
function Header(){
    return (
        <div class="header" >
            <div class="logo-header">
                <img src={logo} alt="logo" />
            </div>
            <div class="search-header">
                <div class="">
                    <input id="search-box" placeholder="Search here">
                    </input>  
                </div>
                
            </div>
        </div>
    )
}
export default Header