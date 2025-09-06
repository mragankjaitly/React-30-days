// import { useState } from "react";

// function TheamToggle(){
//     const[dark, setDark] = useState(flase);

//     const styles = {
//         backgroundColor : dark ? "#333" : "#fff",
//         color: dark ? "#fff" : "#000",
//         padding: "20px",
//         textAlign: "center",
//         borderRadius: "10px"
//     };
    
//     return (
//         <div style = {styles}>
//             <h2>{dark ? "Dark Mode" : "Light Mode"}</h2>
//             <button onClick={() => setDark(!dark)}>
//                 {dark ? "Switch to Light Mode" : "Switch to Drak Mode"}
//             </button>
//         </div>
//     )
// }

// export default TheamToggle;


import { useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  const styles = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#000",
    padding: "20px",
    textAlign: "center",
    borderRadius: "10px",
  };

  return (
    <div style={styles}>
      <h2>{dark ? "Dark Mode 🌙" : "Light Mode ☀️"}</h2>
      <button onClick={() => setDark(!dark)}>
        {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default ThemeToggle;
