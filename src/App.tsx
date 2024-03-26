import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="container">
      <main>
        <Navbar/>
        <Home />
      </main>
    </div>
  );
}

export default App;
