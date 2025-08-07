import { motion } from 'framer-motion';
import SideBar from '../components/SideBar';
import { 
  FaTruck,
  FaBell,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaUser,
  FaCheckCircle,
  FaRecycle
} from 'react-icons/fa';

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

const todaysCollections = [
  {
    location: "Swoyambhu",
    time: "08:00 AM",
    wasteTypes: ["Degradable", "Non-degradable"],
    truckId: "WT-001",
    driver: "Samir Gurung",
    duration: "2 hours",
    status: "Scheduled"
  },
  {
    location: "Macchapokhari",
    time: "10:00 AM",
    wasteTypes: ["Degradable"],
    truckId: "WT-002",
    driver: "Anmol Thapa",
    duration: "1.5 hours",
    status: "Scheduled"
  }
];

const upcomingCollections = [
  {
    location: "Pepsi Cola",
    time: "01:00 PM",
    wasteTypes: ["Non-degradable"],
    truckId: "WT-003",
    driver: "Ashish Puri",
    duration: "1 hours",
    status: "Tuesday"
  }
];

const WasteTruckSchedule = () => {
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
          variants={cardVariants}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#00A72C] rounded-full flex items-center justify-center">
              <FaTruck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Waste Truck Schedule</h1>
              <p className="text-gray-600">Track collections schedule and manage notifications</p>
            </div>
          </div>
          <div className="flex gap-3">
            <motion.button
              className="bg-white text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition flex items-center gap-2 border border-gray-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaBell className="w-4 h-4" />
              Set notifications
            </motion.button>
            <motion.button
              className="bg-[#00A72C] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#00A72C]/90 transition flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaCalendarAlt className="w-4 h-4" />
              View Calendar
            </motion.button>
          </div>
        </motion.div>

        {/* Today's Collections */}
        <motion.div 
          className="mb-8"
          variants={cardVariants}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Today's Collections</h2>
            <FaCalendarAlt className="w-6 h-6 text-[#00A72C]" />
          </div>
          
          <div className="space-y-4">
            {todaysCollections.map((collection, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
                variants={cardVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="w-5 h-5 text-[#00A72C]" />
                    <h3 className="text-lg font-bold text-gray-900">{collection.location}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="w-4 h-4 text-[#00A72C]" />
                    <span className="text-sm font-semibold text-gray-900">{collection.time}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {collection.wasteTypes.map((type, typeIndex) => (
                    <span 
                      key={typeIndex}
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        type === "Degradable" 
                          ? "bg-green-100 text-green-700 border border-green-300"
                          : "bg-gray-100 text-gray-700 border border-gray-300"
                      }`}
                    >
                      {type}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <FaTruck className="w-4 h-4 text-[#00A72C]" />
                    <span className="text-sm text-gray-700">Truck ID: {collection.truckId}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUser className="w-4 h-4 text-[#00A72C]" />
                    <span className="text-sm text-gray-700">Driver: {collection.driver}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="w-4 h-4 text-[#00A72C]" />
                    <span className="text-sm text-gray-700">Duration: {collection.duration}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-semibold text-green-600">{collection.status}</span>
                  </div>
                  <motion.button
                    className="bg-[#00A72C] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#00A72C]/90 transition flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaBell className="w-3 h-3" />
                    Get Notified
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Collections */}
        <motion.div 
          variants={cardVariants}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Collections</h2>
          
          <div className="space-y-4">
            {upcomingCollections.map((collection, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
                variants={cardVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="w-5 h-5 text-[#00A72C]" />
                    <h3 className="text-lg font-bold text-gray-900">{collection.location}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="w-4 h-4 text-[#00A72C]" />
                    <span className="text-sm font-semibold text-gray-900">{collection.time}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {collection.wasteTypes.map((type, typeIndex) => (
                    <span 
                      key={typeIndex}
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        type === "Degradable" 
                          ? "bg-green-100 text-green-700 border border-green-300"
                          : "bg-gray-100 text-gray-700 border border-gray-300"
                      }`}
                    >
                      {type}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <FaTruck className="w-4 h-4 text-[#00A72C]" />
                    <span className="text-sm text-gray-700">Truck ID: {collection.truckId}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUser className="w-4 h-4 text-[#00A72C]" />
                    <span className="text-sm text-gray-700">Driver: {collection.driver}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="w-4 h-4 text-[#00A72C]" />
                    <span className="text-sm text-gray-700">Duration: {collection.duration}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-semibold text-gray-600">{collection.status}</span>
                  </div>
                  <motion.button
                    className="bg-[#00A72C] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#00A72C]/90 transition flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaBell className="w-3 h-3" />
                    Get Notified
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WasteTruckSchedule;
