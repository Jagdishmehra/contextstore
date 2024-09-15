import React, { useContext, useEffect, useState } from 'react'
import UserContext from './context/UserContext';

const Login = () => {

    const[show,setshow]=useState("PLEASE LOGIN");
    const[password,setpassword]=useState('');
    const[username,setusername]=useState('');
    const {login}=useContext(UserContext)

        const handlesubmit=()=>{
            if(!username|| !password)return;
                setshow(login);
        }
   
    
  return (
    <div>
    
    <form onSubmit={(e)=>{e.preventDefault(); handlesubmit();}}
    className='bg-gray-800 w-[30%] mt-[10%] mx-auto pl-12 py-4 rounded-lg text-black'>
      <input 
      value={username}
      onChange={(e)=>setusername(e.target.value)}
      type='text' placeholder='Username'
      className='border border-black p-4 m-2 w-[80%] rounded-lg'/>
      <input 
      value={password}
      onChange={(e)=>setpassword(e.target.value)}
      type='password' placeholder='Password'
      className='border border-black p-4 m-2 w-[80%] rounded-lg'/>

      <button 
      type='submit'
      className='border border-black p-4 m-2 w-[80%] rounded-lg bg-blue-400'>Submit</button>
    </form>
    <h1 className='text-white text-center text-2xl'>{show}</h1>
  </div>
  )
}

export default Login;
