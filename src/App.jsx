import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Greeting from './Greeting.jsx'

import Name from './ProfileCard.jsx'

import ProductCard from './ProductCard.jsx'

import Counter from './Counter.jsx'

import ToggleMessage from './ToggleMessage.jsx'

import TheamToggle from './TheamToggle.jsx'

import Logger from './Logger.jsx'

import Clock from './Clock.jsx'

import TitleClock from "./TitleClock";


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

    {/* <div>
      <h1>
        <ToggleMessage/>
      </h1>
    </div> */}

    {/* <div>
      <h1>Day 3 recap + day 4 start</h1>
      <TheamToggle/>
    </div> */}

    {/* <div>
      <h1>Day 4: useEffect Basics</h1>
      <Logger/>
    </div> */}

    <div>
      <h1>Day 5: Clock</h1>
      <Clock/>
    </div>

    <TitleClock />

    </>
  )
}

export default App
