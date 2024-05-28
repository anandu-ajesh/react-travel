
import { FaHotel } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";

const TopBar = () => {
    return (
        <div className="flex justify-between items-center px-4 py-2">
            <div className="flex items-center">
                <FaHotel size={30} className="mr-2 text-[var(--primary-dark)]" />
                <h1 className="text-xl font-bold text-gray-900">TRAVELER</h1>
            </div>
            <div className="flex">
                <div className="hidden md:flex items-center px-6">
                    <AiOutlineClockCircle size={20} className="mr-2 text-[var(--primary-dark)]" />
                    <p className="text-sm text-gray-900">10:00am-5:00pm</p>
                </div>
                <div className="hidden md:flex items-center px-6">
                    <AiFillPhone size={20} className="mr-2 text-[var(--primary-dark)]" />
                    <p className="text-sm text-gray-900">123-456-7890</p>
                </div>
                <button>Get a free quote</button>
            </div>
        </div>
    )
}

export default TopBar