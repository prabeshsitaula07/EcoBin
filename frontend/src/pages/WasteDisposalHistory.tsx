import { motion } from 'framer-motion';
import SideBar from '../components/SideBar';
import {
  FaHistory,
  FaFilter,
  FaDownload,
  FaRecycle,
  FaLeaf,
  FaCheckCircle,
  FaHourglassHalf
} from 'react-icons/fa';
import { FaBottleWater } from 'react-icons/fa6';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const wasteDisposalData = [
  {
    id: 1,
    type: "Mixed Waste",
    icon: <FaRecycle className="text-gray-600" />,
    status: "collected",
    date: "2024-01-15",
    time: "08:30 AM",
    location: "Bodegal Road, Bhagwan Pau",
    weight: "15 kg",
    category: "degradabale",
    amount: "NPR 250"
  },
  {
    id: 2,
    type: "Plastic Bottles",
    icon: <FaBottleWater className="text-gray-600" />,
    status: "collected",
    date: "2024-01-14",
    time: "07:30 AM",
    location: "Bodegal Road, Bhagwan Pau",
    weight: "8 kg",
    category: "non-degradabale",
    amount: "NPR 250"
  },
  {
    id: 3,
    type: "Food Waste",
    icon: <FaLeaf className="text-gray-600" />,
    status: "pending",
    date: "2024-01-15",
    time: "08:30 AM",
    location: "Bodegal Road, Bhagwan Pau",
    weight: "15 kg",
    category: "degradabale",
    amount: "NPR 250"
  },
  {
    id: 4,
    type: "Electronic Waste",
    icon: <FaRecycle className="text-gray-600" />,
    status: "collected",
    date: "2024-01-15",
    time: "08:30 AM",
    location: "Bodegal Road, Bhagwan Pau",
    weight: "15 kg",
    category: "degradabale",
    amount: "NPR 250"
  },
  {
    id: 5,
    type: "Electronic Waste",
    icon: <FaRecycle className="text-gray-600" />,
    status: "collected",
    date: "2024-01-15",
    time: "08:30 AM",
    location: "Bodegal Road, Bhagwan Pau",
    weight: "15 kg",
    category: "degradabale",
    amount: "NPR 250"
  }
];

const WasteDisposalHistory = () => {
  return (
    <div className="flex min-h-screen bg-[#f6fbf7]">
      <SideBar />
      
      <motion.div 
        className="flex-1 p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div 
          className="flex justify-between items-start mb-8"
          variants={itemVariants}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#00A72C] rounded-full flex items-center justify-center">
              <FaHistory className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">History</h1>
              <p className="text-gray-600">Track your waste disposal activities and earnings over time</p>
            </div>
          </div>
          <div className="flex gap-3">
            <motion.button
              className="bg-white text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition flex items-center gap-2 border border-gray-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaFilter className="w-4 h-4" />
              Filter
            </motion.button>
            <motion.button
              className="bg-[#00A72C] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#00A72C]/90 transition flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaDownload className="w-4 h-4" />
              Export
            </motion.button>
          </div>
        </motion.div>

        {/* Waste Disposal History Section */}
        <motion.div 
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Waste Disposal History</h2>

          <div className="space-y-4">
            {wasteDisposalData.map((entry) => (
              <motion.div
                key={entry.id}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 flex items-center justify-between"
                variants={itemVariants}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-100 rounded-full">
                    {entry.icon}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-xl font-semibold text-gray-800">{entry.type}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        entry.status === 'collected' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {entry.status}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-1">
                      {entry.date} at {entry.time} • {entry.location}
                    </p>
                    <div className="flex space-x-4 text-gray-700 text-sm">
                      <p><strong>Weight:</strong> {entry.weight}</p>
                      <p><strong>Category:</strong> {entry.category}</p>
                    </div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#00A72C]">
                  {entry.amount}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WasteDisposalHistory;
