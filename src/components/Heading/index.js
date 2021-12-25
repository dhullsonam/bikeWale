import React from 'react';
import {useSelector} from "react-redux";

const Heading = () => {
    const ss = useSelector(state => state.counter)
    return (
        <div>
            <h1>Hello {ss}</h1>
        </div>
    );
};

export default Heading;