import React from 'react'
import './whatGPT3.css'
import Feature from '../../components/feature/Feature'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__padding' id='wgpt3' >
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3?" text= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aspernatur totam id tenetur officia numquam beatae, praesentium ea hic magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aspernatur totam id tenetur officia numquam beatae, praesentium ea hic magnam?">
        </Feature>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'> The possibilities are beyond your imagination</h1>
        <p>Explore the library</p>
      </div>

      <div className='gpt3__whatgpt3-container'>

        <Feature title="Chatbots" 
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore  aspernatur totam id tenetur officia numquam beatae.">
        </Feature>

        <Feature title="Knowledgebase" 
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aspernatur totam id tenetur officia numquam beatae,">
        </Feature>

        <Feature title="Education" 
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aspernatur totam id tenetur.">
        </Feature>
      </div>
    </div>
  )
}

export default WhatGPT3