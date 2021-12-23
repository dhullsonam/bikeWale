import React, {useContext} from 'react';
import {SonamContext} from "./Context";

const Insidebutton = () => {
    const [message, setMessage] = useContext(SonamContext);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
};

export default Insidebutton;