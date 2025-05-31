import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/style.css";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Recipe from "./pages/Recipe";
// import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          {/* <Navbar /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Create />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/:id" element={<Recipe />} />
            </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
