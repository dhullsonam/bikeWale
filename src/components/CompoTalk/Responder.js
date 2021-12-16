import { useState } from "react/cjs/react.development";
import {getValueFrom} from '../../Apiheader'


function Responder(props){
    const [val ,setVal] = useState("")
    const handleEvent = () => {
      const value = getValueFrom()
         setVal(value)
        props.callBack("this is para from child")
    }

    return(
        <div>
            <button onClick={handleEvent}>button</button>
            <h2>{val}</h2>
        </div>
    )


}
export default Responder;