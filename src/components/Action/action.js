import React from "react";
import {useDispatch} from "react-redux";

const MyAction = () => {
    return {
        type: "one"
    }
}
const OnMyButtonClick = () => {
    const dispatcher = useDispatch()
    return(
        <div>
            <button onClick={()=>dispatcher(MyAction())}>click me</button>
        </div>
    )
}
export default OnMyButtonClick;