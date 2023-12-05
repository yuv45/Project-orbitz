import React,{useContext} from 'react'
import { AuthContext} from '../context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';

export const Logout =()=>{
    const {setLoggedIn}=useContext(AuthContext)
    const navigate=useNavigate()
    return(
        <>
        <div className='page'>
        <h1> You want to logout</h1>
        <div  className='logout'>
            <button onClick={()=>{
            setLoggedIn(false)
            navigate("/signin")
            }}>Logout</button>
        </div>
        </div>
        
        </>
    )
}