

import React, { useState } from 'react';
import { useRef } from 'react/cjs/react.development';

function AddNewRepo() {

    const [repoName, setRepoName] = useState("")
    const getNewRepoName = useRef(null)
    const AddNewRepoHandler = () => {
        setRepoName(getNewRepoName.current.value)
        console.log(setRepoName);
    }
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/vnd.github.v3+json");
    myHeaders.append("Authorization", "token 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");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "name": repoName
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://api.github.com/user/repos", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

   
    return (
        <div>
            <input placeholder="Enter a new Repo Name" ref={getNewRepoName}></input>
            <button onClick={AddNewRepoHandler}>AddRepo</button>
            <h4>New Repo is created {repoName}</h4>
        </div>

    )
}
export default AddNewRepo;


