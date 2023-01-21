import React from "react";
import { BrowserRouter } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

import Header from "./components/header/Header";
import MainContent from "./components/main-content/MainContent";
import Sidebar from "./components/sidebar/Sidebar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <Header />
          <Sidebar />
          <MainContent />
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
