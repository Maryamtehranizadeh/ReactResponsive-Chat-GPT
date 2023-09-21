import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request early access to get started</h4>
        <h1 className='gradient__text'> The possibilities are beyond your imagination</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic alias nihil autem laborum veritatis quisquam, voluptatem aliquam vitae sequi, accusamus ullam. Labore officia alias inventore tempora?</p>
        <h4>Request early access to get started</h4>
      </div>
    </div>
  )
}

export default Possibility