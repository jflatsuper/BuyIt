import React from 'react';
import { Navigate ,Route, useNavigate} from 'react-router-dom';
import user from '../Models/user';
import Login from './Login';
import axios from 'axios';
function Logout({history}){
    const navigate=useNavigate();
    const afterUserDestroyed=()=>{
        navigate('/login',{replace:true});
    }
    
    const onLogout=(e)=>{
        e.preventDefault();
       
        window.axios.post('/api/logout').then((response)=>{
            
        }).catch((errors)=>{
            console.log(errors.response.data);

        }).then(()=> {
            //this code will be definitely executed
            user.logout(afterUserDestroyed);
        });
      
    };
  

return(
    <form onSubmit={onLogout}>  
            <button type="submit" >Logout</button>

            </form>
)

}
export default Logout;