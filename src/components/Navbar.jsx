import { Link } from 'react-router-dom';

const Navbar = () => {
    const links = <>
    <li><Link to={"/"}>Home</Link></li>
    <li><Link to={"/about"}>About Me</Link></li>
    <li><Link to={"/skill"}>Skills</Link></li>
    <li><Link to={"/education"}>Education</Link></li>

    <li><Link to={"/projects"}>Projects</Link></li>
    <li><Link to={"/contact"}>Contact Us</Link></li>


    </>
    return (
        <div className="navbar fixed z-10 bg-black/40 text-white mb-5 w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-gray-700 bg-opacity-40 rounded-box z-[1] mt-3 w-52 p-2 shadow-2xl">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl italic">Tasnia</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {links}
      
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <a className="btn bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-400 transition-all">Hire me</a>

  </div>
</div>
    );
};

export default Navbar;