import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer>
        <div className='footer'>
            <div className='footermain'>
            <ul>
        <li><a href="#"><img src='https://visaviews-immigratons-gov-nz.vercel.app/_next/image?url=%2Fimages%2Flogo-nzgovt.png&w=128&q=75' alt='footerlogo'></img></a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Legal</a></li>
            <li><a href="#">Complaints</a></li>
            <li><a href="#">Terms & Condiotions</a></li>
        </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer