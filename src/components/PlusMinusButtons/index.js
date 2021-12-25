import React from 'react';
import {useDispatch} from "react-redux";

const increment = () => {
    return {
        type: "Inc"
    }
}

const decrement = () => {
    return {
        type: "Dec"
    }
}

const PlusMinusButtons = () => {
    const dispatcher = useDispatch()

    return (
        <div>
          <button onClick={() => dispatcher(increment()) }>+</button>
          <button onClick={() => dispatcher(decrement()) }>-</button>
        </div>
    );
};

export default PlusMinusButtons;