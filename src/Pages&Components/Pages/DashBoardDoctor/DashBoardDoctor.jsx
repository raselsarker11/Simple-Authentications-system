import { FaAd, FaAddressCard, FaCalendar, FaHome, FaLifeRing, FaList } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import Doctor from "../Dashboad/Doctor/Doctor";


const DashBoardDoctor = () => {
    return (
        <div className="flex">
            {/* Dashboard side bar */}
            <div className="w-64 min-h-screen bg-[#07332F] pt-24">
                <ul className="menu p-4">
                    <li className="pt-2 text-white">
                        <NavLink to="/"><FaHome></FaHome>Home</NavLink>
                    </li>
                    <li className="pt-2 text-white">
                        <NavLink to="/"><FaAd></FaAd> Add Doctor</NavLink>
                    </li>
                    <li className="pt-2 text-white">
                        <NavLink to="/"><FaList></FaList> Manage Doctors</NavLink>
                    </li>
                    <li className="pt-2 text-white">
                        <NavLink to="/"><FaCalendar></FaCalendar>Apointments</NavLink>
                    </li>
                    <div className="divider divider-primary pt-8"></div>
                    <li className="pt-2 text-white">
                        <NavLink to="/"><FaHome></FaHome>Home</NavLink>
                    </li>
                    <li className="pt-2 text-white">
                        <NavLink to="/"><FaLifeRing></FaLifeRing> About us</NavLink>
                    </li>
                    <li className="pt-2 text-white">
                        <NavLink to="/"><FaList></FaList>Blogs</NavLink>
                    </li>
                    <li className="pt-2 text-white">
                        <NavLink to="/"><FaAddressCard></FaAddressCard>Contact us</NavLink>
                    </li>
                </ul>
            </div>
            {/* Dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
                <Doctor></Doctor>
            </div>
        </div>
    );
};

export default DashBoardDoctor;