import React from 'react'
import './NewsLetter.css'
export default function newsLetter() {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offer On Your Email</h1>
      <p> Subscribe to our newletter and stay update</p>
      <div>
        <input type="email" placeholder='Your Email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}
