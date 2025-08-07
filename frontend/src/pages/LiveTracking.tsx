import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  FaArrowLeft,
  FaClock,
  FaTruck,
  FaMapMarkerAlt,
  FaLocationArrow
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

const summaryCards = [
  {
    id: 1,
    title: "Next Pickup",
    value: "2 hrs 15 min",
    icon: <FaClock className="w-8 h-8 text-gray-600" />,
    color: "text-gray-900"
  },
  {
    id: 2,
    title: "Active Trucks",
    value: "5",
    icon: <FaTruck className="w-8 h-8 text-[#00A72C]" />,
    color: "text-[#00A72C]"
  },
  {
    id: 3,
    title: "Distance to you",
    value: "1.2 km",
    icon: <FaMapMarkerAlt className="w-8 h-8 text-[#00A72C]" />,
    color: "text-gray-900"
  }
];

const LiveTracking = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f6fbf7]">
      <motion.div 
        className="max-w-7xl mx-auto px-6 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Back Button */}
        <motion.button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition mb-6"
          variants={cardVariants}
        >
          <FaArrowLeft className="w-4 h-4" />
          Back
        </motion.button>

        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          variants={cardVariants}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Live Tracking</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track waste collection trucks in real-time and schedule pickups efficiently.
          </p>
        </motion.div>

        {/* Summary Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          variants={cardVariants}
        >
          {summaryCards.map((card) => (
            <motion.div
              key={card.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{card.title}</p>
                  <p className={`text-2xl font-bold ${card.color}`}>{card.value}</p>
                </div>
                <div className="text-gray-400">
                  {card.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Real-Time Map Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
          variants={cardVariants}
        >
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <FaMapMarkerAlt className="w-6 h-6 text-[#00A72C]" />
              <h2 className="text-2xl font-bold text-gray-900">Real-Time Map</h2>
            </div>
            <p className="text-gray-600">Live locations of waste collection trucks</p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-green-100 rounded-lg p-8 mb-6 flex flex-col items-center justify-center min-h-[300px]">
            <FaMapMarkerAlt className="w-12 h-12 text-[#00A72C] mb-4" />
            <p className="text-gray-700 text-center">Interactive map will load here</p>
          </div>

          {/* Enable Location Services Button */}
          <div className="text-center">
            <motion.button
              className="bg-[#00A72C] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#00A72C]/90 transition flex items-center justify-center gap-2 mx-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaLocationArrow className="w-4 h-4" />
              Enable location services
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LiveTracking;
