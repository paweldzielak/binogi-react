import React from "react";
import { BrowserRouter } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

import MainContent from "./components/main-content/MainContent";
import Sidebar from "./components/sidebar/Sidebar";

import "./App.css";
import { UserDataProvider } from "./context/user-data.context";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <UserDataProvider>
          <BrowserRouter>
            <Sidebar />
            <MainContent />
          </BrowserRouter>
        </UserDataProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
