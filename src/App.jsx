import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Greeting from "./Greeting.jsx";

import Name from "./ProfileCard.jsx";

import ProductCard from "./ProductCard.jsx";

import Counter from "./Counter.jsx";

import ToggleMessage from "./ToggleMessage.jsx";

import TheamToggle from "./TheamToggle.jsx";

import Logger from "./Logger.jsx";

import Clock from "./Clock.jsx";

import TitleClock from "./TitleClock";

import UserList from "./UserList.jsx";

import Home from "./Home.jsx";

import About from "./About.jsx";

import Contact from "./Contact.jsx";

import { Routes, Route, Link } from "react-router-dom";

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

      {/* <div>
      <h1>Day 5: Clock</h1>
      <Clock/>
    </div> */}

      <TitleClock />

      {/* <div>
      <h1>Day 6: useEffect with API</h1>
      <UserList />
    </div> */}

      <div></div>
      <h1>Day 8: React Router</h1>

      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}<Link to = "/users">Users</Link>
      </nav>

      {/* Define Router */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<UserList />}></Route>
      </Routes>
    </>
  );
}

export default App;
