import React from 'react';
import {useSelector} from "react-redux";
import ioe from "./Reduce/reducer";

const Lists = () => {
    const myStateValue = useSelector(state => state.io)
    console.log(myStateValue)
    return (
        <div>
            <h1>{myStateValue}</h1>
        </div>
    );
};
export default Lists

