import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1>Let's built something amazing with GPT-3 OpenAI</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis enim fugit quae eos maxime commodi laudantium sint soluta veritatis qui?</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your Email Address'/>
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="people" />
          <p>1,600 people have requested access and visited in the last 24 hours</p>
        </div> 
      </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header