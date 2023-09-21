import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import {Blog, Features, Footer, Header, Possibility, WhatGPT3} from './containers'

import { Brands, CTAS, Navbar } from './components'


function App() {
  

  return (
    <div className='App'>
      <div className='gradient__bg '>
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Brands></Brands>
      <WhatGPT3></WhatGPT3>
      <Features></Features>
      <Possibility></Possibility>
      <CTAS></CTAS>
      <Blog></Blog>
      <Footer></Footer>      
      </div>
  )
}

export default App
