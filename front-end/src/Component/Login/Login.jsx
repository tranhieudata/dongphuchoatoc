import { useNavigate } from 'react-router-dom'
import "./Login.css"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';


function Login(){
    const[user_name,setUsername] = useState()
    const[passwords,setPassword] = useState()
    const navigate = useNavigate();
    const role = Cookies.get("role")
    // if(localStorage.getItem('isAuthenticated')){
    //     navigate('/')
    //     console.log(role)
    // }
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3030/api/usermanager/login', 
                { 
                    user_name, 
                    passwords 
                },
                {withCredentials :true}
            );
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/');
        } catch (error) {
            navigate('/login')
        }
        
    };
    return (
        <div className='Container'>
           <div >
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Username"
                value={user_name}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={passwords}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button onClick={handleLogin}>Login</button>
        </div>
            
        </div>
    )
}
export default Login