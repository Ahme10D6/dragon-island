import { NavLink } from 'react-router-dom';
 
function Navbar() {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className=' blue-gradient_text'>AH</p>
        </NavLink>
        <nav className=' text-lg flex gap-7 font-medium'>
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-700 underline ' : 'text-black '}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-700 underline ' : 'text-black '}>About</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-700 underline ' : 'text-black'}>Projects</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-700 underline ' : 'text-black '}>Contact</NavLink>
        </nav>
    </header>
  )
}

export default Navbar