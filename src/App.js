import React from "react";
import './App.css';
import MainPage from "./pages/MainPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <BrowserRouter basename='/'>
      <MainPage />
    </BrowserRouter>
  );
}

export default App;
