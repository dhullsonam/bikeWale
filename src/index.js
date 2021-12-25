import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {createStore} from "redux";



//Actions
let print = () => {
    console.log("running")
    let myObj = {
        type: "runTV"
    }
    return myObj
}

//Reducer
let ourReducer = (state = "", action) => {
    switch (action.type) {
        case "runTV":
            state = "H1"
            return state
    }
}

let myStore = createStore(ourReducer)


myStore.subscribe( () => {
    console.log(myStore.getState())
})


myStore.dispatch(print())

ReactDOM.render(
 
    <BrowserRouter>
      <App />
    </BrowserRouter>,

  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
