
import React from "react"
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import AddNewRepo from "./components/AddNewRepo";
import ActionCreator from "./components/CompoTalk/ActionCreator";
import DeleteRepo from "./components/DeleteRepo";
import ExOfMaterialUI, { CustomButton } from "./components/ExOfMaterial";
import CheckVoteEligiblity from "./components/CheckVoteEligiblity";



function App() {
  return (
    <>
      {/* <AddNewRepo/>
       <DeleteRepo/> 
      <ExOfMaterialUI/>
      <CustomButton/> */}
      {/*<ActionCreator/>*/}
        <CheckVoteEligiblity/>
    </>
  );
}

export default App;
