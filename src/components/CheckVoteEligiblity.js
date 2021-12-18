import Button from "@mui/material/Button";
import {useRef, useState} from "react";
import RefToVoteEligiblity from "./RefToVoteEligiblity";


function CheckVoteEligiblity() {
    const refToAge = useRef()
    const [checkAge ,setAge]= useState(null)
    const ageHandler = () => {
        // console.log("clicked!!")
        var hh=refToAge.current.value
        setAge(hh)
    }

    return (
        <div>
            <h2>Check your Eligiblity to cast Vote</h2>
            <input placeholder="Enter your Age" ref={refToAge}></input>
            <Button variant="contained" size="small" onClick={ageHandler}>Check-Eligiblity</Button>
            { checkAge===null? <span/>: <RefToVoteEligiblity value={checkAge}/> }

        </div>
    )
}

export default CheckVoteEligiblity;


