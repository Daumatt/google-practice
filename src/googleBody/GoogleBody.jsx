import React from 'react'
import './GoogleBody.css'
import googlePic from '../assets/google.png'

function GoogleBody() {
  return (
    <div className='google-bod'>
        <img src={googlePic} alt="google" className='pix' width={400} height={200} />
        <div className='search'>
            <input type="text" />
        </div>
        <div className='google-butt'> 
            <button>Google Search</button>
            <button>I'm feeling lucky</button>
        </div>
    </div>
  )
}

export default GoogleBody