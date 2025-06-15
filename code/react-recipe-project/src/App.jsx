// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
// import Home from "./pages/Home";
// import CreatePage from "./pages/CreatePage";
// import RecipePage from "./pages/RecipePage";
// import EditPage from "./pages/EditPage";
// import './App.css';


// const App = () => (
//   <Router>
//     <Layout>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/recipes" element={<RecipePage />} />
//         <Route path="/create" element={<CreatePage />} />
//         <Route path="/edit/:id" element={<EditPage />} />
//       </Routes>
//     </Layout>
//   </Router>
// );

// export default App;

// App.jsx

import "./App.css"

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

// import AppLayout from "./layouts/AppLayout"
import AppLayout from "./components/Layout";

import Home from "./pages/Home"
import CreatePage from "./pages/CreatePage"
import EditPage from "./pages/EditPage"
import RecipePage from "./pages/RecipePage";

// Define routes with createBrowserRouter
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout/>}>
      <Route index element={<Home />} />
      {/* Home page (list of recipes) */}
      <Route path="/recipes" element={<RecipePage />} />
      {/* Create page to add a new recipe */}
      <Route path="create" element={<CreatePage />} />
      {/* Edit page to edit existing recipe by id */}
      <Route path="edit/:id" element={<EditPage />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
