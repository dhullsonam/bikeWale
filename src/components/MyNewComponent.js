import React from "react";
import ChlidComponent from "./ChlidComponent";
import {logDOM} from "@testing-library/react";

function MyNewComponent() {
    const handleMyEvent = ()=>{
        console.log("parent")
        fetch("https://api.github.com/users/dhullsonam/repos")
            .then(response=>response.json())
            .then(data=>{console.log(data[0].clone_url)
                console.log(data[0].full_name)})
    }

    return (
        <div>
            <ChlidComponent myInfo={handleMyEvent}/>
        </div>
    )
}

export default MyNewComponent