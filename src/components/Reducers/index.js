import {combineReducers} from "redux";

const counter = (state = 0, obj) => {
    switch (obj.type) {
        case "Inc":
            return state + 1
        case "Dec":
            return state - 1
        default:
            return state
    }
}


export const myRed = combineReducers({
    counter: counter
})