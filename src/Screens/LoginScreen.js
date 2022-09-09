import React,{useState,useEffect} from 'react';
import axios from "axios";

import Loader from '../Components/Loader';
import Error from '../Components/Error';
 function LoginScreen(props) {
    
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState()
    async function Login(){
        
            const user ={
                email,
                password
                
            }
            try{
                
                setloading(true);
                axios.post('/api/users/login', user).then(function (response) {
                
                console.log(response);
               
                window.location.href = "/home";
                console.log("Login successfull");
                
                });
            }
            catch(error){
                    
                setloading(false);
                
                console.log(error);
                alert("Invalid credentials")
                seterror(true);
        }
            /*try{
               
                setloading(true);
                const result = await axios.post('/api/users/login',user).data
                
                setloading(false);
                    
                    localStorage.setItem('CurrentUser',JSON.stringify(result));
                    window.location.href='/home'
                    
                
            }
            catch(error){
                    
                    setloading(false);
                    console.log(error);
                    seterror(true);
            }*/
    }
    return (
        <div>
            {loading && (<Loader/>)}
            {error && (<Error message='Invalid credentials'/>)}
            <div className='row justify-content-center mt-5'>
            <div className='col-md-5 mt-5'>
            
                <div className='bs'>
                
                    <h2>Login</h2>
                    <input type="text" className='form-control' placeholder='email'
                    value = {email} onChange={(e) => {setemail(e.target.value)}}
                    ></input>
                    <input type="text" className='form-control' placeholder='password'
                    value = {password} onChange={(e) => {setpassword(e.target.value)}}
                    ></input>
                    
                    <button className='btn btn-primary mt-3' onClick={Login}>Login</button>
                    
                </div>
            </div>
            </div>
        </div>
    );
}

export default LoginScreen;