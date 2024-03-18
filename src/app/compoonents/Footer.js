import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer>
        <div className='footer'>
            <div className='footermain'>
            <ul>
        <li><a href="/"><img src='https://visaviews-immigratons-gov-nz.vercel.app/_next/image?url=%2Fimages%2Flogo-nzgovt.png&w=128&q=75' alt='footerlogo'></img></a></li>
            <li><a href="https://www.immigration.govt.nz/">About Us</a></li>
            <li><a href="https://www.immigration.govt.nz/about-us/site-information">Legal</a></li>
            <li><a href="https://www.immigration.govt.nz/">Complaints</a></li>
            <li><a href="https://www.immigration.govt.nz/formshelp/terms-of-use-visaview">Terms & Condiotions</a></li>
        </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer