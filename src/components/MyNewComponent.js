import React, {useState} from "react";
import ChlidComponent from "./ButtonComponent";
import uniqid from 'uniqid';

function MyNewComponent() {
    const [item ,setItem] =useState([])

    return (
        <div>
          <h1> Here is the List</h1>
            <ol>
                {item.map((i)=>{
                    return <li key={uniqid()}><h4>{i.full_name}</h4></li>
                })}
            </ol>
        </div>
    )
}

export default MyNewComponent