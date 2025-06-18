import { NavLink, Outlet } from "react-router-dom";

function AppLayout(){
  return<>
    <header>
      <h1> Recipe Sharing</h1>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='create'>Create</NavLink>
    </header>
    <main>
      <Outlet />
    </main>
  </>
}

export default AppLayout;