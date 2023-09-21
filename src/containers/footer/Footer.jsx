import React from 'react'
import './footer.css'
import  gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step into the future before others?</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request early access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt="logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overones</p>
          <p>48 x 15</p>
          <p>Social Media</p>
          <p>Countries</p>
          <p>Contacts</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms and conditions</p>
          <p>Privacy Policy</p>
          <p>contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>078-79876655</p>
          <p>info@payme.net</p>
          <p>Countries</p>
          <p>Contacts</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer