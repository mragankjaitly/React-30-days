import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Greeting from './Greeting.jsx'

import Name from './ProfileCard.jsx'

import ProductCard from './ProductCard.jsx'

import Counter from './Counter.jsx'

import ToggleMessage from './ToggleMessage.jsx'

function App() {

  return (
    <>
      {/* <div>
        <h1>Hello World!</h1>
        <Name name = "Mragank" age = "22" city = "Bareilly"/>
      </div>
      <div>
        <ProductCard  titel = "Apple" price = "2" status = {false}/>
      </div> */}

      {/* <div>
      <h1>Day 3: useState Practice</h1>
      <Counter />
    </div> */}

    <div>
      <h1>
        <ToggleMessage/>
      </h1>
    </div>
    </>
  )
}

export default App
