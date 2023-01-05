import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer p-20 text-base-content bg-pink-500 ">
            <div>

                <p><span className='font-bold text-3xl text-white'>Phone world</span></p>
            </div>
            <div>
                <span className="footer-title text-white">Services</span>
                <Link to='/' className="link link-hover text-white">Branding</Link>
                <Link to='/' className="link link-hover text-white">Design</Link>
                <Link to='/' className="link link-hover text-white">Marketing</Link>
                <Link to='/' className="link link-hover text-white">Advertisement</Link>
            </div>
            <div>
                <span className="footer-title text-white">Company</span>
                <Link to='/' className="link link-hover text-white">About us</Link>
                <Link to='/' className="link link-hover text-white">Contact</Link>
                <Link to='/' className="link link-hover text-white">Jobs</Link>
                <Link to='/' className="link link-hover text-white">Press kit</Link>
            </div>
            <div>
                <span className="footer-title text-white">Legal</span>
                <Link to='/' className="link link-hover text-white">Terms of use</Link>
                <Link to='/' className="link link-hover text-white">Privacy policy</Link>
                <Link to='/' className="link link-hover text-white">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;