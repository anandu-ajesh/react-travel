import { FaBars } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { useState } from "react";


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="w-full flex justify-between items-center min-h-[50px] absolute z-10 bg-gradient-to-r from-cyan-500 to-blue-500  text-white">
            <ul className="hidden sm:flex px-4 ">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="#gallery">Gallery</a>
                </li>
                <li>
                    <a href="#booking">Booking</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="flex justify-between">
                <FaFacebookF className="mx-4" />
                <FaInstagram className="mx-4" />
                <FaTwitter className="mx-4" />
                <FaGooglePlus className="mx-4" />
            </div>
            {/* hamburger */}
            <div onClick={handleNav} className="sm:hidden z-10">
                <FaBars size={20} className="mx-4 cursor-pointer" />
            </div>
            {/* mobile menu */}
            <div onClick={handleNav} className={nav ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black px-4 py-7 flex flex-col' : ' hidden absolute top-0 h-screen left-[-100] ease-in duration-500'}>
                <ul className="h-full w-full text-center pt-12">
                    <li className="text-2xl py-8">
                        <a href="/">Home</a>
                    </li>
                    <li className="text-2xl py-8">
                        <a href="#gallery">Gallery</a>
                    </li>
                    <li className="text-2xl py-8">
                        <a href="#booking">Booking</a>
                    </li>
                    <li className="text-2xl py-8">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar