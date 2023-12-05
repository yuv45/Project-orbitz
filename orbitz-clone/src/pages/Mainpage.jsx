import React from 'react'
import { AuthContext } from '../context/AuthContextProvider'
import Traveling from '../Components/Traveling'
import Featured from '../Components/Featured'
import { useContext } from 'react'
 
import Slider from '../Components/slider'
import Stays from '../Components/Stays'
import Textarea from '../Components/Textarea'
export const Mainpage  = () => {
  const {loggedIn}=useContext(AuthContext)
  return (
    <>{
      loggedIn?<div>
      <Stays/>
      <Textarea/>
      <Slider/>
      <Featured/>
      <Traveling/></div>:
      <div className='sign'>
   <h1>For Further Accessibility you have to SignIn</h1>
      </div>
   
      } 
    
    </>
  )
}
