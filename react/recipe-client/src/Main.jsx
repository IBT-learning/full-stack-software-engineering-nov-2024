import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import App from "./App";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Create from "./pages/Create";
import Edit from "./pages/Edit";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="recipe/:id" element={<Recipe />} />
        <Route path="create" element={<Create />} />
        <Route path="edit/:id" element={<Edit />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
