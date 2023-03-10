import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const menuItems = <>
        <li className='font-bold'><Link to='/'>Home</Link></li>
        <li className='font-bold'><Link to='/about'>About</Link></li>
        <li className='font-bold'><Link to='/blog'>Blog</Link></li>
        {
            user?.uid ?
                <>
                    <li className='font-bold'><Link to='/dashboard'>Dashboard</Link></li>
                    <Link onClick={logOut}><button className="btn bg-blue-500 border-0">Log out</button></Link>
                </>

                :
                <>
                    <li className='font-bold'><Link to='/login'>Login</Link></li>
                </>

        }


        {
            user?.photoURL ?
                <Link title={user?.email}>
                    <>
                        <div className="avatar online ml-5">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} alt='' />
                            </div>
                        </div>
                    </>
                </Link>
                :
                <>
                </>

        }



    </>

    return (
        <div className="navbar lg:text-white  flex justify-between bg-pink-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl font-bold"><span className='text-2xl'>Phone word</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;

