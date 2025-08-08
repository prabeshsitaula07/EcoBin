import { motion } from 'framer-motion';
import SideBar from "../components/SideBar";
import profile from "../assets/ishan.jpg";
import { FaChartLine, FaChartBar, FaChartPie } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from 'react';

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

const Dashboard = () => {
  const [chartType, setChartType] = useState<'line' | 'bar' | 'pie'>('line');

  // Sample data for different chart types
  const weeklyData = [
    { day: 'Mon', organic: 12, inorganic: 8, total: 20 },
    { day: 'Tue', organic: 15, inorganic: 10, total: 25 },
    { day: 'Wed', organic: 18, inorganic: 12, total: 30 },
    { day: 'Thu', organic: 14, inorganic: 9, total: 23 },
    { day: 'Fri', organic: 20, inorganic: 15, total: 35 },
    { day: 'Sat', organic: 16, inorganic: 11, total: 27 },
    { day: 'Sun', organic: 13, inorganic: 7, total: 20 },
  ];

  const pieData = [
    { name: 'Organic Waste', value: 65, color: '#00A72C' },
    { name: 'Inorganic Waste', value: 35, color: '#FF6B35' },
  ];

  const renderChart = () => {
    switch (chartType) {
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="organic" stroke="#00A72C" strokeWidth={3} />
              <Line type="monotone" dataKey="inorganic" stroke="#FF6B35" strokeWidth={3} />
              <Line type="monotone" dataKey="total" stroke="#4A90E2" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        );
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="organic" fill="#00A72C" />
              <Bar dataKey="inorganic" fill="#FF6B35" />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
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
        className="bg-white rounded-xl shadow p-6 mt-6"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Waste Collection Analytics</h3>
          <div className="flex gap-2">
            <button 
              className={`p-2 rounded-lg transition ${chartType === 'line' ? 'bg-[#00A72C] text-white' : 'hover:bg-gray-100 text-gray-400'}`}
              onClick={() => setChartType('line')}
            >
              <FaChartLine className="w-4 h-4" />
            </button>
            <button 
              className={`p-2 rounded-lg transition ${chartType === 'bar' ? 'bg-[#00A72C] text-white' : 'hover:bg-gray-100 text-gray-400'}`}
              onClick={() => setChartType('bar')}
            >
              <FaChartBar className="w-4 h-4" />
            </button>
            <button 
              className={`p-2 rounded-lg transition ${chartType === 'pie' ? 'bg-[#00A72C] text-white' : 'hover:bg-gray-100 text-gray-400'}`}
              onClick={() => setChartType('pie')}
            >
              <FaChartPie className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Enhanced Chart */}
        <div className="h-64">
          {renderChart()}
        </div>
        
        {/* Chart Summary */}
        <div className="mt-4 grid grid-cols-3 gap-4 text-center">
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="text-2xl font-bold text-[#4A90E2]">108</div>
            <div className="text-sm text-gray-600">Total Collections</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="text-2xl font-bold text-[#00A72C]">70</div>
            <div className="text-sm text-gray-600">Organic Waste</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="text-2xl font-bold text-[#FF6B35]">38</div>
            <div className="text-sm text-gray-600">Inorganic Waste</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </div>
  );
};

export default Dashboard;