import React, {useRef, useState, useEffect} from 'react';
import Button from "@mui/material/Button";

const DetailedList = () => {
    const getNoFromInput = useRef()
    const [number , setNumber] =useState("")


    const inputValueChanged = () => {
        var getNum = getNoFromInput.current.value
        setNumber(getNum)
        console.log(number)
    }

    const handleEvent = () => {
        // console.log("im clicked!!")
        console.log(number)

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "mobile": number
        });
        console.log(raw)

        // var requestOptions = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: raw,
        //     redirect: 'follow'
        // };
        //
        // fetch("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP", requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));
        setNumber('')
    }


    return (
        <div>
            <input placeholder={"search"} ref={getNoFromInput} onChange={inputValueChanged} value={number}/>
            <Button variant={"outlined"} size={"small"} onClick={handleEvent}>click me</Button>
        </div>
    );
};

export default DetailedList;