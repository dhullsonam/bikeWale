


import React, {useState} from 'react';
import Responder from './Responder'

function ActionCreator() {
    let para = "this is parent para"
    const [val, setVal] = useState(para)


    // TODO: i want to doo somethionf
    function callme(inp) {
        console.log("i am called with : "+ inp )
        setVal(inp)
    }

 return(
        <div>
            <p>{val}</p>
            <Responder callBack={callme} />
        </div>
    )


}
export default ActionCreator;