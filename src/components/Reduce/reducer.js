import React from "react";
import {combineReducers} from "redux";

const MyReducer = (state="",action) => {
    switch (action.type){
        case "one":
            state="hello sonam"
            return state;
        default:
            return state
    }
}

const comRed = combineReducers({
    io: MyReducer
})


export default comRed;