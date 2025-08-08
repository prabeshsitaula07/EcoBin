import React, { useEffect, useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  CreditCard,
  Home,
  BellIcon,
  LogOut,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; 


type MenuName = "dashboard" | "waste" | "notifier";

const Sidebar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<MenuName | null>(null);
  const [logoutModel, setLogoutModel] = useState<boolean>(false);
  const navigate = useNavigate();

  const authentication = localStorage.getItem('authentication');

  useEffect(()=>{
    if(authentication !== "true"){
      navigate('/')
    }
  }
  ,[authentication]
)

  const toggleDropdown = (menuName: MenuName): void => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const handleLogout = (): void => {
      navigate('/')
      localStorage.removeItem('authentication');
  };

  return (
    <div className="w-64 min-h-screen bg-[#022002] text-white flex flex-col">
      {/* Header */}
      {
        logoutModel && 
        <>
         <div className="fixed  w-full h-full bg-black/70 flex items-center justify-center">
         <div className="w-[30%] rounded-2xl h-64 bg-white text-black flex justify-center items-center flex-col">
          <h1 className="text-2xl">Are you sure you want to logout?</h1>
          <div className="mt-10 w-full justify-around flex">
            <button onClick={()=>setLogoutModel(false)} className="bg-gray-500 py-2 px-4 text-white text-lg font-semibold rounded-lg hover:bg-gray-400 cursor-pointer duration-300 transition-all">No, Close</button>
            <button onClick={handleLogout} className="bg-red-500 py-2 px-4 text-white text-lg font-semibold rounded-lg hover:bg-red-400 cursor-pointer duration-300 transition-all">Yes, Logout</button>
          </div>
         </div>
         </div>
        </>
      }
      <div className="bg-[#22371C] p-4 border-b border-gray-600">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div>
             
              <h1 className="text-xl font-bold text-white">EcoBin</h1>
              <p className="text-xs text-gray-300">Smart Waste Management Tool</p>
            </div>
          </div>
          
          <button
            onClick={()=> setLogoutModel(true)}
            className="p-2 hover:bg-[#1a2c16] rounded-lg transition-colors duration-200 cursor-pointer"
            title="Logout"
          >
            <LogOut size={18} className="text-gray-300 hover:text-white" />
          </button>
          
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2 p-4 flex-1">
        {/* Dashboard Dropdown */}
        <div>
          <button
            onClick={() => toggleDropdown("dashboard")}
            className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded transition-colors duration-200"
          >
            <span className="flex items-center gap-2">
              <Home size={18} />
              Dashboard
            </span>
            {openMenu === "dashboard" ? (
              <ChevronDown size={18} />
            ) : (
              <ChevronRight size={18} />
            )}
          </button>

          {openMenu === "dashboard" && (
            <div className="ml-6 mt-1 space-y-1">
              <Link
                to="/dashboard"
                className="block p-2 hover:bg-gray-700 rounded transition-colors duration-200"
              >
                Your Dashboard
              </Link>
              <Link
                to="/profile"
                className="block p-2 hover:bg-gray-700 rounded transition-colors duration-200"
              >
                Your Profile
              </Link>
              <Link
                to="/edit-profile"
                className="block p-2 hover:bg-gray-700 rounded transition-colors duration-200"
              >
                Edit Profile
              </Link>
              <Link
                to="/image-classifier"
                className="block p-2 hover:bg-gray-700 rounded transition-colors duration-200"
              >
                Image Classifier
              </Link>
              <Link
                to="/tenant-management"
                className="block p-2 hover:bg-gray-700 rounded transition-colors duration-200"
              >
                Tenants
              </Link>
            </div>
          )}
        </div>

        {/* Waste Management Dropdown */}
        <div>
          <button
            onClick={() => toggleDropdown("waste")}
            className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded transition-colors duration-200"
          >
            <span className="flex items-center gap-2">
              <CreditCard size={18} />
              Waste Management
            </span>
            {openMenu === "waste" ? (
              <ChevronDown size={18} />
            ) : (
              <ChevronRight size={18} />
            )}
          </button>

          {openMenu === "waste" && (
            <div className="ml-6 mt-1 space-y-1">
              <Link
                to="/waste/declaration"
                className="block p-2 hover:bg-gray-700 rounded transition-colors duration-200"
              >
                Invoice Declarations
              </Link>
              <Link
                to="/waste/payment"
                className="block p-2 hover:bg-gray-700 rounded transition-colors duration-200"
              >
                Invoice Clearance
              </Link>
              <Link
                to="/transaction-history"
                className="block p-2 hover:bg-gray-700 rounded transition-colors duration-200"
              >
                Transaction History
              </Link>
            </div>
          )}
        </div>

        {/* Notifier Dropdown */}
        <div>
          <button
            onClick={() => toggleDropdown("notifier")}
            className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded transition-colors duration-200"
          >
            <span className="flex items-center gap-2">
              <BellIcon size={18} />
              Notifier
            </span>
            {openMenu === "notifier" ? (
              <ChevronDown size={18} />
            ) : (
              <ChevronRight size={18} />
            )}
          </button>

          {openMenu === "notifier" && (
            <div className="ml-6 mt-1 space-y-1">
              <Link
                to="/notifier/schedule"
                className="block p-2 hover:bg-gray-700 rounded transition-colors duration-200"
              >
                Waste Truck Schedule
              </Link>
              <Link
                to="/notifier/notification-setting"
                className="block p-2 hover:bg-gray-700 rounded transition-colors duration-200"
              >
                Manage Notifications
              </Link>
              <Link
                to="/history/waste-disposal"
                className="block p-2 hover:bg-gray-700 rounded transition-colors duration-200"
              >
                Waste Disposal History
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;