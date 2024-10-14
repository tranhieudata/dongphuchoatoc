
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Sale from './SaleComponent/Sale';
import Designer from './DesignerComponent/Designer';
import Admin from './Admin/Admin';
import Cookies from 'js-cookie';
import axios from "axios";

function Homepage() {


    const role = Cookies.get('role');
    return(
        
        <div>

            {role==="view-admin" && <><Sale/></>}
        </div>
            
        
    )
    
    
 
}

export default Homepage;
