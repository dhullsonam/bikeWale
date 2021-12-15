import React from 'react';
import { useRef, useState } from 'react/cjs/react.development';
import {createHeaders}
 from "../Apiheader";


function DeleteRepo() {
    const deltedRepoReference = useRef()
    const [delRepoValue, setDelRepoValue] = useState('')
    const deleteRepoHandler = () => {
        setDelRepoValue(deltedRepoReference.current.value);
        // console.log(setDelRepoValue);
    }
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/vnd.github.v3+json");
    myHeaders.append("Authorization", "token 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");

    var requestOptions = {
        method: 'DELETE',
        headers: createHeaders,
        redirect: 'follow'
    };
    // console.log("https://api.github.com/repos/dhullsonam/"+delRepoValue);

    // fetch("https://api.github.com/repos/dhullsonam/" +delRepoValue, requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));
    return (
        <div>
            <input placeholder="Enter a repo to be deleted" ref={deltedRepoReference}></input>
            <button onClick={deleteRepoHandler}>Delete Repo</button>
        </div>
    )
}
export default DeleteRepo;