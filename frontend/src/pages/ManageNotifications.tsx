import { motion } from 'framer-motion';
import SideBar from '../components/SideBar';
import { 
  FaBell,
  FaCog,
  FaEnvelope,
  FaMobile,
  FaDesktop,
  FaClock,
  FaTrash,
  FaEye
} from 'react-icons/fa';
import { useState } from 'react';

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

const notificationHistory = [
  {
    id: 1,
    title: "Waste Collection Reminder",
    message: "Your waste collection is scheduled for tomorrow at 8:00 AM",
    type: "reminder",
    time: "2 hours ago",
    read: false,
    priority: "high"
  },
  {
    id: 2,
    title: "Payment Due",
    message: "Your monthly waste management payment is due in 3 days",
    type: "payment",
    time: "1 day ago",
    read: true,
    priority: "medium"
  },
  {
    id: 3,
    title: "Collection Completed",
    message: "Waste collection completed successfully at Swoyambhu",
    type: "success",
    time: "2 days ago",
    read: true,
    priority: "low"
  },
  {
    id: 4,
    title: "Schedule Update",
    message: "Your collection schedule has been updated for next week",
    type: "update",
    time: "3 days ago",
    read: true,
    priority: "medium"
  }
];

const ManageNotifications = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    collectionReminders: true,
    paymentReminders: true,
    scheduleUpdates: true,
    weeklyDigest: false,
    dailyDigest: true
  });

  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleSettingChange = (key: string) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  const filteredNotifications = selectedFilter === 'all' 
    ? notificationHistory 
    : notificationHistory.filter(n => n.type === selectedFilter);

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
              <FaBell className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Notifications</h1>
              <p className="text-gray-600">Configure your notification preferences and view history</p>
            </div>
          </div>
          <motion.button
            className="bg-[#00A72C] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#00A72C]/90 transition flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaCog className="w-4 h-4" />
            Settings
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Notification Settings */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
            variants={cardVariants}
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FaCog className="w-5 h-5 text-[#00A72C]" />
              Notification Settings
            </h2>

            <div className="space-y-6">
              {/* Delivery Methods */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Delivery Methods</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FaEnvelope className="w-4 h-4 text-[#00A72C]" />
                      <span className="text-gray-900">Email Notifications</span>
                    </div>
                    <button
                      onClick={() => handleSettingChange('emailNotifications')}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        settings.emailNotifications ? 'bg-[#00A72C]' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                        settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FaMobile className="w-4 h-4 text-[#00A72C]" />
                      <span className="text-gray-900">SMS Notifications</span>
                    </div>
                    <button
                      onClick={() => handleSettingChange('smsNotifications')}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        settings.smsNotifications ? 'bg-[#00A72C]' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                        settings.smsNotifications ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FaDesktop className="w-4 h-4 text-[#00A72C]" />
                      <span className="text-gray-900">Push Notifications</span>
                    </div>
                    <button
                      onClick={() => handleSettingChange('pushNotifications')}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        settings.pushNotifications ? 'bg-[#00A72C]' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                        settings.pushNotifications ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Notification Types */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Types</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-900">Collection Reminders</span>
                    <button
                      onClick={() => handleSettingChange('collectionReminders')}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        settings.collectionReminders ? 'bg-[#00A72C]' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                        settings.collectionReminders ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-900">Payment Reminders</span>
                    <button
                      onClick={() => handleSettingChange('paymentReminders')}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        settings.paymentReminders ? 'bg-[#00A72C]' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                        settings.paymentReminders ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-900">Schedule Updates</span>
                    <button
                      onClick={() => handleSettingChange('scheduleUpdates')}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        settings.scheduleUpdates ? 'bg-[#00A72C]' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                        settings.scheduleUpdates ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Notification History */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
            variants={cardVariants}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <FaBell className="w-5 h-5 text-[#00A72C]" />
                Notification History
              </h2>
              <div className="flex gap-2">
                <select 
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="all">All</option>
                  <option value="reminder">Reminders</option>
                  <option value="payment">Payments</option>
                  <option value="success">Success</option>
                  <option value="update">Updates</option>
                </select>
              </div>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {filteredNotifications.map((notification) => (
                <motion.div 
                  key={notification.id}
                  className={`p-4 rounded-lg border ${
                    notification.read ? 'bg-gray-50 border-gray-200' : 'bg-blue-50 border-blue-200'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <button className="p-1 hover:bg-gray-200 rounded">
                        <FaEye className="w-3 h-3 text-gray-500" />
                      </button>
                      <button className="p-1 hover:bg-gray-200 rounded">
                        <FaTrash className="w-3 h-3 text-gray-500" />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <FaClock className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500">{notification.time}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      notification.priority === 'high' ? 'bg-red-100 text-red-700' :
                      notification.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {notification.priority}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>{filteredNotifications.length} notifications</span>
                <button className="text-[#00A72C] hover:underline">Mark all as read</button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ManageNotifications;
