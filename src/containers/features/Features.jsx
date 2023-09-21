import React from 'react'
import './features.css'
import Feature from '../../components/feature/Feature'

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text : 'Lorem The future is now and you have to realize it. Step into future now and make it happen.The future is now and you have to realize it. Step into future now and make it happen.'
  } ,
  {
    title: 'Become the tended active',
    text : 'Lorem The future is now and you have to realize it. Step into future now and make it happen.The future is now and you have to realize it. Step into future now and make it happen.'
  },
  {
    title: 'Message or am nothing',
    text : 'Lorem The future is now and you have to realize it. Step into future now and make it happen.The future is now and you have to realize it. Step into future now and make it happen.'
  }, 
  {
    title: 'Message or am nothing',
    text : 'Lorem The future is now and you have to realize it. Step into future now and make it happen.The future is now and you have to realize it. Step into future now and make it happen.'
  }, 

]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
          The future is now and you have to realize it. Step into future now and make it happen.
        </h1>
        <p>
          Request early access to get started.
        </p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature key= {item.title + index } title={item.title} text={item.text}></Feature>
        ))}
         
      </div>
    </div>
  )
}

export default Features