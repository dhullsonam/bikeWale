
import React from "react"

import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
   <NavigationBar/>
   <HomePage/>
    </>

  );
}

export default App;
