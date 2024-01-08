import { NavLink } from "react-router-dom"



const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="content">
        <NavLink className='link' to='/'>
          Home
        </NavLink>
        <NavLink className='link' to='create'>
          Create
        </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar