import { motion } from 'framer-motion';
import SideBar from '../components/SideBar';
import { Link } from 'react-router-dom';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaBuilding, 
  FaHome, 
  FaPencilAlt, 
  FaRecycle, 
  FaChartLine, 
  FaTrophy, 
  FaCalendar, 
  FaDotCircle, 
  FaLeaf, 
  FaShieldAlt, 
  FaStar, 
  FaMedal,
  FaWeight,
  FaMoneyBillWave,
  FaPercentage,
  FaUserClock,
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle
} from 'react-icons/fa';
import profile from '../assets/ishan.jpg';

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

const stats = [
  { 
    icon: <FaWeight className="w-6 h-6 text-green-600" />, 
    value: "342 kg", 
    label: "Total waste collected" 
  },
  { 
    icon: <FaMoneyBillWave className="w-6 h-6 text-blue-600" />, 
    value: "NPR 2,350", 
    label: "Total Bills cleared" 
  },
  { 
    icon: <FaPercentage className="w-6 h-6 text-yellow-600" />, 
    value: "85%", 
    label: "Eco Score" 
  },
  { 
    icon: <FaUserClock className="w-6 h-6 text-purple-600" />, 
    value: "JAN 2024", 
    label: "Member Since" 
  }
];

const activities = [
  { 
    type: "success", 
    text: "Collected 5.2kg degradable waste", 
    time: "2 hours ago",
    icon: <FaCheckCircle className="w-3 h-3" />
  },
  { 
    type: "warning", 
    text: "Collected 3.1kg non-degradable waste", 
    time: "2 days ago",
    icon: <FaExclamationTriangle className="w-3 h-3" />
  },
  { 
    type: "info", 
    text: "Achievement unlocked: Eco Warrior", 
    time: "4 days ago",
    icon: <FaInfoCircle className="w-3 h-3" />
  }
];

const achievements = [
  { 
    title: "Eco Warrior", 
    description: "Collected 100kg+ degradable waste", 
    gradient: "from-green-500 to-green-600",
    icon: <FaLeaf className="w-5 h-5 text-green-600" />
  },
  { 
    title: "Green Guardian", 
    description: "Achieved 90% eco score", 
    gradient: "from-emerald-500 to-emerald-600",
    icon: <FaShieldAlt className="w-5 h-5 text-emerald-600" />
  }
];

const UserProfile = () => {
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
          className="bg-[#e8f5e8] p-6 rounded-xl mb-6 flex items-center gap-4"
          variants={cardVariants}
        >
          <div className="w-12 h-12 bg-[#00A72C] rounded-full flex items-center justify-center">
            <FaPencilAlt className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#00A72C]">Your Profile</h1>
            <p className="text-gray-600">Manage your account and view your eco-journey</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Profile Information Card */}
          <motion.div 
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            variants={cardVariants}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Profile Information</h2>
              <Link to="/edit-profile">
              <FaPencilAlt className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
              </Link>
            </div>
            <p className="text-gray-600 mb-6">Update your personal details and contact information</p>
            
            <div className="flex items-center gap-4 mb-6">
              <img src={profile} alt="Profile" className="w-16 h-16 rounded-full object-cover border-2 border-gray-200" />
              <div>
                <h3 className="text-xl font-bold text-[#00A72C]">Ishan Sitaula</h3>
                <p className="text-gray-600">Member since August 08 2025</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="w-4 h-4 text-gray-400" />
                <div className="flex-1">
                  <label className="text-sm text-gray-600">Email Address</label>
                  <p className="text-gray-900">user1@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <FaPhone className="w-4 h-4 text-gray-400" />
                <div className="flex-1">
                  <label className="text-sm text-gray-600">Contact no.</label>
                  <p className="text-gray-900">+977 9876543210</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="w-4 h-4 text-gray-400" />
                <div className="flex-1">
                  <label className="text-sm text-gray-600">Address</label>
                  <p className="text-gray-900">Nepaltar</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <FaBuilding className="w-4 h-4 text-gray-400" />
                <div className="flex-1">
                  <label className="text-sm text-gray-600">Street name</label>
                  <p className="text-gray-900">Bodegal Road</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <FaHome className="w-4 h-4 text-gray-400" />
                <div className="flex-1">
                  <label className="text-sm text-gray-600">House no.</label>
                  <p className="text-gray-900">001-002-003</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Your Stats Card */}
          <motion.div 
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            variants={cardVariants}
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6">Your Stats</h2>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity Card */}
          <motion.div 
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            variants={cardVariants}
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`mt-2 ${
                    activity.type === 'success' ? 'text-green-500' :
                    activity.type === 'warning' ? 'text-yellow-500' : 'text-blue-500'
                  }`}>
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900">{activity.text}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Card */}
          <motion.div 
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            variants={cardVariants}
          >
            <div className="flex items-center gap-2 mb-6">
              <FaTrophy className="w-5 h-5 text-yellow-600" />
              <h2 className="text-xl font-bold text-gray-900">Achievements</h2>
            </div>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className={`bg-gradient-to-r ${achievement.gradient} p-4 rounded-lg text-white relative overflow-hidden`}
                >
                  {/* Badge Icon - Positioned as overlapping circle on the left */}
                  <div className="absolute -top-2 -left-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-black">
                    {achievement.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="pl-12">
                    <h3 className="font-bold text-lg mb-1">{achievement.title}</h3>
                    <p className="text-sm opacity-90">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default UserProfile;
