import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import AppLayout from './layouts/AppLayout.jsx';
import Home from './pages/Home.jsx';
import Create from './pages/Create.jsx';
import RecipeDetails from './pages/RecipeDetails.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppLayout />}>
      <Route path='/'>
        <Route path='/' element={<Home />} />
        <Route path=':id' element={<RecipeDetails />} />
      </Route>

      <Route path='/create' element={<Create />} />
    </Route>
  )
);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
