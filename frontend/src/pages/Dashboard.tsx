import { motion } from 'framer-motion';
import SideBar from "../components/SideBar";
import profile from "../assets/ishan.jpg";
import { FaChartLine, FaChartBar, FaChartPie } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import { FaUserCircle } from "react-icons/fa"; // Remove this import

const notifications = [
  { text: "Invoice generated", date: "24th Aug, 2025" },
  { text: "We have collected your organic waste.", date: "24th Aug, 2025" },
  { text: "Organic waste truck arrived", date: "24th Aug, 2025" },
];

const statCards = [
  { label: "Your inorganic disposal", value: "1/104" },
  { label: "Your organic disposal", value: "2/104" },
  { label: "Your total billings", value: "NPR 69", isBilling: true },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Dashboard = () => (
  <div className="flex min-h-screen bg-[#f6fbf7]">
    <SideBar />
    <motion.div 
      className="flex-1 p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Profile Card */}
        <motion.div 
          className="bg-white rounded-xl shadow p-6 flex flex-col items-center"
          variants={cardVariants}
        >
          <img src={profile} alt="Profile" className="w-16 h-16 mb-2 rounded-full object-cover border-2 border-gray-200" />
                     <h2 className="text-2xl font-bold text-[#00A72C]">Ishan Sitaula</h2>
           <p className="text-gray-600 text-sm">Nepaltar, Bodegal Road</p>
          <p className="text-gray-600 text-sm mb-4">+977 9876543210</p>
          <Link to='/edit-profile'>
          <button className="bg-[#00A72C] text-white px-6 py-1 rounded-lg font-semibold hover:bg-[#00A72C]/90 transition hover:cursor-pointer">Edit</button>
          </Link>
        </motion.div>
        {/* Notification Section - full right */}
        <motion.div 
          className="bg-white rounded-xl shadow p-6 flex flex-col md:col-span-2"
          variants={cardVariants}
        >
          <h3 className="font-bold text-center mb-2 text-[#00A72C]">Your Recent Notifications</h3>
          <div className="flex justify-between font-semibold mb-2">
            <span>Notification</span><span>Date</span>
          </div>
          {notifications.map((n, i) => (
            <div key={i} className="flex justify-between items-center py-1 border-b last:border-b-0">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#00A72C]" />
                <span className="text-sm">{n.text}</span>
              </div>
              <span className="text-xs text-gray-500">{n.date}</span>
            </div>
          ))}
          <button className="mt-4 bg-[#00A72C] text-white px-4 py-1 rounded-lg font-semibold hover:bg-[#00A72C]/90 transition self-end">View all</button>
        </motion.div>
      </div>
      {/* Stats below */}
      <motion.div 
        className="flex gap-4 mb-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {statCards.map((card, i) => (
          <motion.div 
            key={i} 
            className="bg-white rounded-xl shadow p-6 flex-1 flex flex-col items-center justify-center"
            variants={cardVariants}
          >
            <span className="text-gray-500 text-sm">{card.label}</span>
            <span className="text-4xl font-bold text-[#00A72C]">{card.value}</span>
            {card.isBilling ? (
              <button className="mt-2 bg-[#00A72C] text-white px-6 py-1 rounded-lg font-semibold hover:bg-[#00A72C]/90 transition">Pay</button>
            ) : (
              <span className="text-xs text-gray-500 mt-1">On fiscal year 2025/26</span>
            )}
          </motion.div>
        ))}
      </motion.div>
      <motion.div 
        className="bg-white rounded-xl shadow p-6 mt-6 h-64"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Waste Collection Analytics</h3>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <FaChartLine className="w-4 h-4 text-[#00A72C]" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <FaChartBar className="w-4 h-4 text-gray-400" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <FaChartPie className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
        
        {/* Random Graph */}
        <div className="h-fit flex items-end justify-between gap-2">
          {Array.from({ length: 7 }, (_, i) => {
            const height = Math.floor(Math.random() * 60) + 20; // Random height between 20-80
            const isToday = i === 6; // Last bar represents today
            return (
              <motion.div
                key={i}
                className="flex flex-col items-center"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div 
                  className={`w-8 rounded-t-lg transition-all duration-300 hover:scale-105 ${
                    isToday ? 'bg-[#00A72C]' : 'bg-gray-300'
                  }`}
                  style={{ height: `${height}%` }}
                ></div>
                <span className="text-xs text-gray-500 mt-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                </span>
              </motion.div>
            );
          })}
        </div>
        
        {/* Graph Legend */}
        <div className="flex items-center justify-center gap-6 mt-4 text-sm">
          
        </div>
      </motion.div>
    </motion.div>
  </div>
);

export default Dashboard;