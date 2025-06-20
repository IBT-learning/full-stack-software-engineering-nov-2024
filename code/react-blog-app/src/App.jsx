import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home"
import Layout from "./components/Layout";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";

//existing code...
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout wrapper
    children: [
      {path: "/", element :<Home /> },
      { path: "/posts", element: <Posts /> },
      { path: "/login", element: <Login /> },
      { path: "/profile", element: <Profile /> },
      { path: "/register", element: <Register /> },
      { path: "/profile", element: <Profile /> },
      { path: "/profile/:userId", element: <Profile /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;