  import React from 'react'
  import { Link, useNavigate } from 'react-router-dom'
  import './Navbar.css'
  import axios from 'axios'



  const Navbar = () => {

    const navigate =useNavigate();

    const handleLanding = ()=>{
      axios.defaults.withCredentials=true;
      console.log("clicked")
      axios.post("http://localhost:4000/auth/verify")
      .then(res=>{
        if(!(res.data==="verified"))
          navigate('/signin')
        navigate('/landing')
      })
      .catch(err=>{
        console.log(err)
      })
  
    }
    const handleLogout=()=>{
      axios.post('http://localhost:4000/auth/logout')
      .then(res=>{
        if(res.data==="logged out")
          navigate('/')
      })
      .catch(err=>{
        console.log(err)
      })
    }

    return (
      <div className='navbar'>
        <button onClick={handleLanding}><strong >Nutrition Analyser</strong></button>
        <button onClick={handleLogout}><strong>Logout</strong></button>
      </div>
    )
  }

  export default Navbar
