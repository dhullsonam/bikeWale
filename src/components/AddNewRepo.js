

import React, { useState } from 'react';
import { useRef } from 'react/cjs/react.development';
import { createHeaders, getRequests, makeApiRequest } from "../Apiheader";

function AddNewRepo() {

    const [repoName, setRepoName] = useState("")
    const getNewRepoName = useRef(null)

    const AddNewRepoHandler = () => {
        setRepoName(getNewRepoName.current.value)
        console.log(repoName);

        var requestOptions = {
            method: 'POST',
            headers: createHeaders(),
            body: getRequests(repoName),
            redirect: 'follow'
        };

        const apiUrl = "https://api.github.com/user/repos"
        makeApiRequest(apiUrl, requestOptions, success, faliure)
    }

    function success(res) {
        console.log("got result");
        console.log("----------------");
        console.log(res);
        console.log("----------------");
    }


    function faliure(err) {
        console.log("got failure");
        console.log("----------------");
        console.log(err);
        console.log("----------------");
    }


    return (
        <div>
            <input placeholder="Enter a new Repo Name" ref={getNewRepoName}></input>
            <button onClick={AddNewRepoHandler}>AddRepo</button>
            <h4>New Repo is created {repoName}</h4>
        </div>

    )
}
export default AddNewRepo;


