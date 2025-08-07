import React, { useState } from "react";
import logo from "../assets/logo.png";
import {
  ChevronDown,
  ChevronRight,
  CreditCard,
  Home,
  Settings,
  BellIcon,
  LogOut,
  Trash2
} from "lucide-react";
import { Link } from "react-router-dom"; // ✅ import Link

interface SidebarProps {
  onLogout?: () => void;
}

type MenuName = "dashboard" | "waste" | "notifier";

const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  const [openMenu, setOpenMenu] = useState<MenuName | null>(null);

  const toggleDropdown = (menuName: MenuName): void => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const handleLogout = (): void => {
    if (onLogout) {
      onLogout();
    } else {
      console.log("Logging out...");
    }
  };

  return (
    <div className="w-64 min-h-screen bg-[#022002] text-white flex flex-col">
      {/* Header */}
      <div className="bg-[#22371C] p-4 border-b border-gray-600">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div>
             
              <h1 className="text-xl font-bold text-white">Eco Bin</h1>
              <p className="text-xs text-gray-300">Smart Waste Management Tool</p>
            </div>
          </div>
          <Link to="/">
          <button
            onClick={handleLogout}
            className="p-2 hover:bg-[#1a2c16] rounded-lg transition-colors duration-200 cursor-pointer"
            title="Logout"
          >
            <LogOut size={18} className="text-gray-300 hover:text-white" />
          </button>
          </Link>
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
                to="/notifier/collection"
                className="block p-2 hover:bg-gray-700 rounded transition-colors duration-200"
              >
                Waste Truck Schedule
              </Link>
              <Link
                to="/notifier/payment"
                className="block p-2 hover:bg-gray-700 rounded transition-colors duration-200"
              >
                Manage Notifications
              </Link>
              <Link
                to="#"
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