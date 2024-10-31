import React from 'react'
import './About.css'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import mainImg from '../assets/mainImg.svg'

function About() {
  return (
    <>
 <header>
      <div className='container'>
       <div className='content'>
       <img className='logo' src={logo}/>
       <ul>
        <li><Link to='/' href="#">Home</Link></li>
        <li><a id='about' href='#'>About</a></li>
       </ul>
       </div>
      </div>
    </header>


    <div className='main'>
      <div className='container'>
        <div className='mainCont'>
          <h1>Welcome .</h1>
          <p>This is my first challenge with Html&CSS.</p>
          <img id='mainImg' src={mainImg}/>
          
        </div>
      </div>
    </div>

    <footer>
    <p>This app cteated by <span>Aon2023</span></p>
    </footer>
    </>
  )
}

export default About
  