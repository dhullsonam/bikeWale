import React, {useContext} from 'react';
import Button from "@mui/material/Button";
import {inputHandler} from './InputValue'
import Insidebutton from "./insidebutton";


const ButtonComponent = () => {

    const handleEvent = () => {
        console.log("im clicked")
        //setMessage("Sonam")
    }


    return (
        <div>
            <Button variant={"contained"} size={"small"} onClick={handleEvent}>Click me</Button>
            <Insidebutton></Insidebutton>
        </div>
    );
};

export default ButtonComponent;