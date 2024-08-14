import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const navOptions = <>
        <li className=""><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact us</Link></li>
        <li><Link to="/faq">Faq</Link></li>
    </>

    return (
        <div className="w-full bg-black bg-opacity-35">
            <div className="navbar z-10 bg-white  max-w-screen-xl text-black flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl text-[#a8e847]">Hospital-Dashboard</a>
                </div>
                <div className="navbar-center mx-auto hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="md:flex">
                        <NavLink to="/login" className="rounded-md px-3 py-2 font-semibold transition duration-150 ease-in hover:text-primar">
                            Sign In
                        </NavLink>
                        <NavLink to="/register" className="bg-[#82CB15] rounded-md transition duration-150 ease-in font-semibold px-4 py-2 hidden lg:block border-2 border-[#82CB15] hover:text-white hover:bg-[#82CB15] text-white">
                            Sign Up
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;