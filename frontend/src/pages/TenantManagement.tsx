import { motion } from 'framer-motion';
import SideBar from '../components/SideBar';
import { 
  FaUsers, 
  FaUserCheck, 
  FaUserTimes, 
  FaPhone,
  FaCalendarAlt,
  FaEllipsisV
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

const summaryCards = [
  {
    title: "Total Tenants",
    value: "5",
    icon: <FaUsers className="w-8 h-8 text-gray-600" />,
    color: "text-gray-900"
  },
  {
    title: "Active Tenants",
    value: "4",
    icon: <FaUserCheck className="w-8 h-8 text-green-600" />,
    color: "text-green-600"
  },
  {
    title: "Inactive Tenants",
    value: "1",
    icon: <FaUserTimes className="w-8 h-8 text-red-600" />,
    color: "text-red-600"
  }
];

const tenants = [
  {
    id: 1,
    name: "Samir Gurung",
    address: "Ba-2-Kha-2025",
    phone: "9889768900",
    joinDate: "2025-8-7",
    status: "Active",
    profilePic: profile
  },
  {
    id: 2,
    name: "Anmol Thapa",
    address: "Ba-3-Kha-2025",
    phone: "9889768901",
    joinDate: "2025-8-8",
    status: "Active",
    profilePic: profile
  },
  {
    id: 3,
    name: "Dibash Neupane",
    address: "Ba-4-Kha-2025",
    phone: "9889768902",
    joinDate: "2025-8-9",
    status: "Inactive",
    profilePic: profile
  },
  {
    id: 4,
    name: "Prabesh Sitaula",
    address: "Ba-5-Kha-2025",
    phone: "9889768903",
    joinDate: "2025-8-10",
    status: "Active",
    profilePic: profile
  },
  {
    id: 5,
    name: "Suman Karki",
    address: "Ba-6-Kha-2025",
    phone: "9889768904",
    joinDate: "2025-8-11",
    status: "Active",
    profilePic: profile
  }
];

const TenantManagement = () => {
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
          className="mb-8"
          variants={cardVariants}
        >
          <h1 className="text-3xl font-bold text-[#00A72C] mb-2">Tenant Management</h1>
          <p className="text-gray-600">Manage residents and their waste disposal activities across all buildings</p>
        </motion.div>

        {/* Summary Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {summaryCards.map((card, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
              variants={cardVariants}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{card.title}</p>
                  <p className={`text-3xl font-bold ${card.color}`}>{card.value}</p>
                </div>
                <div className="text-gray-400">
                  {card.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tenant Directory */}
        <motion.div 
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          variants={cardVariants}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Tenant Directory</h2>
              <p className="text-sm text-gray-600">Showing {tenants.length} of {tenants.length} tenants</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-[#00A72C]">Tenant</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Contact</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Join Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-[#00A72C]">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tenants.map((tenant, index) => (
                  <motion.tr 
                    key={tenant.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={tenant.profilePic} 
                          alt={tenant.name} 
                          className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
                        />
                        <div>
                          <p className="font-semibold text-gray-900">{tenant.name}</p>
                          <p className="text-sm text-gray-500">{tenant.address}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <FaPhone className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-700">{tenant.phone}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-700">{tenant.joinDate}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        tenant.status === 'Active' 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-red-100 text-red-600'
                      }`}>
                        {tenant.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <FaEllipsisV className="w-4 h-4 text-gray-400" />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TenantManagement;
