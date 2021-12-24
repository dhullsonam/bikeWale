import React from "react"
import {BrowserRouter, Routes, Route, Link, Router} from "react-router-dom";
import AddNewRepo from "./components/AddNewRepo";
import ActionCreator from "./components/CompoTalk/ActionCreator";
import DeleteRepo from "./components/DeleteRepo";
import ExOfMaterialUI, {CustomButton} from "./components/ExOfMaterial";
import CheckVoteEligiblity from "./components/CheckVoteEligiblity";
import DetailedList from "./components/DetailedList";
import MyNewComponent from "./components/MyNewComponent";
import ButtonComponent from "./components/ButtonComponent";
import InputValue from "./components/InputValue";
import {AppProvider} from "./components/Context";
import DataProvider from "./contextApi/DataProvider";
import BtnComponent from "./contextApi/BtnComponent";


function App() {
    return (
        <>
            {/* <AddNewRepo/>
       <DeleteRepo/> 
      <ExOfMaterialUI/>
      <CustomButton/> */}
            {/*<ActionCreator/>*/}
            {/*  <CheckVoteEligiblity/>*/}
            {/*  <DetailedList/>*/}
            {/*<AppProvider>*/}
            {/*    <InputValue/>*/}
            {/*    <ButtonComponent/>*/}
            {/*    <MyNewComponent/>*/}
            {/*</AppProvider>*/}
            <DataProvider>
                <BtnComponent/>
            </DataProvider>

        </>
    );
}

export default App;
