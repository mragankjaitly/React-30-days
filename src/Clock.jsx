import {useState, useEffect} from "react";

function Clock(){

    const[time, setTime] = useState( new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime( new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return(
        <div>
            <h1>Current Time: {time}</h1>
        </div>
    )
}

export default Clock;