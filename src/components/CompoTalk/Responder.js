import { useState } from "react/cjs/react.development"
import ActionCreator from './ActionCreator'

function Responder(){
    const [val ,setVal] = useState("")
    const handleEvent = () => {
        setVal("hello world")

    }
    return(
        <div>
            <h2>{val}</h2>
        </div>
    )
}
export default Responder;