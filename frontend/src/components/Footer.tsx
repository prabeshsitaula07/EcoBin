import { Clock, Shield, TrendingUp } from "lucide-react";
import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-gray-100 text-black">
      <div className="flex flex-row py-10 px-10">
        <div className="w-1/2">
          <div className="Header flex flex-row items-center">
              <Link to="/"><img src={logo} alt="logo" className="w-10 h-10" /></Link>
          </div>
          <div className="mt-3">
            Making cities cleaner through Smart Waste Management System and community engagement
          </div>
          <div className="flex flex-row gap-5 mt-3">
            <Shield />
            <Clock />
            <TrendingUp />
          </div>
        </div>
        <div className="w-1/2 flex flex-row justify-around">
          <div>
            <span className="font-bold text-black">Features</span>
            <ul>
              <li className="mt-2"><Link to="/features/waste-classification" className="hover:underline">Waste Classification</Link></li>
              <li className="mt-2"><Link to="/features/live-tracking" className="hover:underline">Live Tracking</Link></li>
              <li className="mt-2"><Link to="/features/payment-system" className="hover:underline">Payment System</Link></li>
              <li className="mt-2"><Link to="/features/ai-assistant" className="hover:underline">AI Assistant</Link></li>
            </ul>
          </div>
          <div>
            <span className="font-bold text-black">Support</span>
            <ul>
              <li className="mt-2"><Link to="/support/help-center" className="hover:underline">Help Center</Link></li>
              <li className="mt-2"><Link to="/support/contact-us" className="hover:underline">Contact Us</Link></li>
              <li className="mt-2"><Link to="/legal/privacy" className="hover:underline">Privacy and Policy</Link></li>
              <li className="mt-2"><Link to="/legal/terms" className="hover:underline">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-800 p-3 text-center text-gray-500">
        <span>2025 EcoBin Management. All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;