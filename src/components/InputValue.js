import React from 'react';
import {logDOM} from "@testing-library/react";

const InputValue = () => {
    const inputValueHandler = (e) => {
            console.log(e.target.value)
        }
    return (
        <div>
            <input placeholder={"ENTER THE VALUE"} onChange={inputValueHandler}/>
        </div>
    );
};

export default InputValue;