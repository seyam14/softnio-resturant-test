import { Link } from "react-router-dom";
import image from "../../assets/Group.png";

const Header = () => {
    
    const navOptions = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Portfolio">Portfolio</Link></li>
            <li><Link to="/Clients">Clients</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
        </>
    );

    return (
        <div className="navbar sticky top-0 z-10 bg-red-700 text-white">
            <div className="max-w-6xl mx-auto flex w-full items-center">
                <div className="navbar-start flex items-center">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                   
                    <Link to="/" className="btn btn-ghost normal-case text-2xl flex items-center">
                        <img src={image} alt="Logo" className="h-8 w-8 mr-2" /> 
                        Restaurant
                    </Link>
                </div>
                
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                
                <div className="navbar-end hidden md:flex">
                    <button className="btn bg-yellow-500 hover:bg-yellow-600">Book a table</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
