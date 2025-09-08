import { useState, useEffect } from "react";

function TitleClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString();
      setTime(currentTime);

      // ✅ update the browser tab title
      document.title = currentTime;
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // return (
  //   <div>
  //     <h2>Check your tab title ⏰</h2>
  //     <p>Current time is also displayed here: {time}</p>
  //   </div>
  // );
}

export default TitleClock;
