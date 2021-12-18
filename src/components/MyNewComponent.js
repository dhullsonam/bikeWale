import React, {useState} from "react";
import ChlidComponent from "./ChlidComponent";


function MyNewComponent() {
    const [item ,setItem] =useState([])
    const handleMyEvent = ()=>{
        console.log("parent")
        fetch("https://api.github.com/users/dhullsonam/repos")
            .then(response=>response.json())
            .then(data =>setItem(data))
    }

    return (
        <div>
            <ChlidComponent myInfo={handleMyEvent}/>
            <ol>
                {item.map(i=>{
                    return <li><h4>{i.full_name}</h4></li>
                })}
            </ol>
        </div>
    )
}

export default MyNewComponent