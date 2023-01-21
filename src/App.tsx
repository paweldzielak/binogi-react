import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header.component";
import MainContent from "./components/main-content/MainContent.component";
import Sidebar from "./components/sidebar/Sidebar.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidebar />
        <MainContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
