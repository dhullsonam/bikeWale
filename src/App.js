
import React from "react"

import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import HomePage from "./components/HomePage";
import { Navbar } from 'react-responsive-navbar-overlay';
import AddNewRepo from "./components/AddNewRepo";



function App() {
  // const handleRepo = () => {
  //   // console.log("clicked!!");
  //   var myHeaders = new Headers();
  //   myHeaders.append("Accept", "application/vnd.github.v3+json");
  //   myHeaders.append("Authorization", "token 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");
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     "name": "demoooo"
  //   });

  //   var requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: 'follow'
  //   };

  //   fetch("https://api.github.com/user/repos", requestOptions)
  //     .then(response => response.text())
  //     .then(result => console.log(result))
  //     .catch(error => console.log('error', error));
  // }
  // const handleDeleteRepo = () => {
  //   console.log("deleted!!");
  //   var myHeaders = new Headers();
  //   myHeaders.append("Accept", "application/vnd.github.v3+json");
  //   myHeaders.append("Authorization", "token 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");
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     "name": "demoooo"
  //   });

  //   var requestOptions = {
  //     method: 'DELETE',
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: 'follow'
  //   };

  //   fetch("https://api.github.com/repos/dhullsonam/demoooo", requestOptions)
  //     .then(response => response.text())
  //     .then(result => console.log(result))
  //     .catch(error => console.log('error', error));
  // }

  // let arry = [{ text: "Home", link: "" },
  // { text: "AboutUs", link: "" },
  // { text: "AboutUs", link: "" }]
  return (
    <>
  {/*     <Navbar backgroundColor="green" brand="BikeWale" links={arry} />
      <button onClick={handleRepo}>Add Repo</button>
      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 *
       <button onClick={handleDeleteRepo}> Delete repo</button> */}
       <AddNewRepo/>
       
    </>
    

  );
}

export default App;
