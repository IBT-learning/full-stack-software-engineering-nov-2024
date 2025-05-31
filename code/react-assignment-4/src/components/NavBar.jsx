import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
      <nav>
        <h1>Recipe App</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
      </nav>
  )
}

export default Navbar