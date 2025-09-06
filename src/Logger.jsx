import {useState, useEffect} from "react";

function Logger(){
    const[count, setCount] = useState(0)

    useEffect(() => {
        console.log("Component rendered. Count it", count);
    }, [count]);

    return(
        <div>
            <h2>Logger Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}></button>
        </div>
    )
}

export default Logger;