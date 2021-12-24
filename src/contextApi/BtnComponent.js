import React,{useContext, useState} from 'react';
import {AppContext} from "./DataProvider";

const BtnComponent = () => {
    const handleEvent = ()=>{
        console.log("im clicked!!")
        console.log(message)
        setMgs(message)

    }
    const [message, setMessage] = useContext(AppContext);
    const [msg, setMgs] = useState("")

    return (
        <div>
            <button onClick={handleEvent}>click me</button>
            <h1>{msg}</h1>
        </div>
    );
};

export default BtnComponent;