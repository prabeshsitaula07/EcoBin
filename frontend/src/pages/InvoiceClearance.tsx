import { motion } from 'framer-motion';
import SideBar from '../components/SideBar';
import { 
  FaTrash, 
  FaLeaf, 
  FaExclamationTriangle, 
  FaRegCircle,
} from 'react-icons/fa';
import esewaLogo from '../assets/esewa.png';
import khaltiLogo from '../assets/khalti.png';
import fonepayLogo from '../assets/fonepay.png';
import { EsewaButton } from '../components/EsewaButton';

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
    value: "1 kgs",
    label: "Inorganic/non-bio degradable waste",
    icon: <FaTrash className="w-8 h-8 text-red-500" />,
    color: "text-red-600"
  },
  {
    value: "2.9 kgs",
    label: "organic/bio degradable waste",
    icon: <FaLeaf className="w-8 h-8 text-green-500" />,
    color: "text-green-600"
  },
  {
    value: "3",
    label: "non-refundable penalty",
    icon: <FaExclamationTriangle className="w-8 h-8 text-orange-500" />,
    color: "text-orange-600"
  }
];

const paymentOptions = [
  {
    name: "e-Sewa",
    logo: esewaLogo,
    url: "www.esewa.com.np",
    color: "bg-green-500",
    textColor: "text-white"
  },
  {
    name: "Khalti",
    logo: khaltiLogo,
    url: "www.khalti.com",
    color: "bg-purple-500",
    textColor: "text-white"
  },
  {
    name: "Fonepay",
    logo: fonepayLogo,
    url: "www.fonepay.com",
    color: "bg-red-500",
    textColor: "text-white"
  }
];

const InvoiceClearance = () => {
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
          <h1 className="text-3xl font-bold text-[#00A72C] mb-2">Invoice Clearance</h1>
          <p className="text-gray-600">Manage your waste disposal invoices and payments</p>
        </motion.div>

        {/* Summary Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
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
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-4xl font-bold text-gray-900 mb-1">{card.value}</p>
                  <p className="text-sm text-gray-600">{card.label}</p>
                </div>
                <div className="text-gray-400">
                  {card.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Message and Penalty Boxes */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Message Box */}
          <motion.div 
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            variants={cardVariants}
          >
            <div className="flex items-center gap-3 mb-4">
              <FaRegCircle className="w-6 h-6 text-red-500" />
              <h3 className="text-lg font-bold text-gray-900">Message</h3>
            </div>
            <p className="text-red-600 font-semibold">Waste uncollected</p>
          </motion.div>

          {/* Penalty Box */}
          <motion.div 
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            variants={cardVariants}
          >
            <div className="flex items-center gap-3 mb-4">
              <FaExclamationTriangle className="w-6 h-6 text-orange-500" />
              <h3 className="text-lg font-bold text-gray-900">Your Penalty Box</h3>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600 mb-1">Date</p>
                <p className="font-semibold text-gray-900">24th Aug, 2025</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Amount in NPR</p>
                <p className="font-semibold text-orange-600">200</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Payment Options */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {paymentOptions.map((option, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
              variants={cardVariants}
            >
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Pay Rs 6000</h3>
                <p className="text-sm text-gray-600 mb-4">via</p>
                
                {/* Payment Logo */}
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src={option.logo} 
                    alt={option.name} 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="text-center mb-4">
                  <p className="font-semibold text-gray-900">{option.name}</p>
                  <p className="text-xs text-gray-500">{option.url}</p>
                </div>
                
                <motion.button
                  className="w-full bg-[#00A72C] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#00A72C]/90 transition"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <EsewaButton/>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InvoiceClearance;
