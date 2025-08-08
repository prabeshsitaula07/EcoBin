import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  FaArrowLeft,
  FaHandHoldingUsd,
  FaLeaf,
  FaTrash
} from 'react-icons/fa';
import esewaLogo from '../assets/esewa.png';
import khaltiLogo from '../assets/khalti.png';
import fonepayLogo from '../assets/fonepay.png';

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

const paymentMethods = [
  {
    id: 1,
    name: "e-Sewa",
    logo: esewaLogo,
    url: "www.esewa.com.np"
  },
  {
    id: 2,
    name: "Khalti",
    logo: khaltiLogo,
    url: "www.khalti.com"
  },
  {
    id: 3,
    name: "Fonepay",
    logo: fonepayLogo,
    url: "www.fonepay.com"
  }
];

const paymentRates = [
  {
    id: 1,
    type: "Biodegradable Waste",
    rate: "NPR 2.5/kg",
    description: "Organic materials, food waste",
    icon: <FaLeaf className="w-8 h-8 text-[#00A72C]" />,
    color: "text-[#00A72C]"
  },
  {
    id: 2,
    type: "Undegradable Waste",
    rate: "NPR 3/kg",
    description: "Organic materials, food waste",
    icon: <FaTrash className="w-8 h-8 text-red-500" />,
    color: "text-red-500"
  }
];

const PaymentSystem = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Payment System</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Manage your earnings, payment methods, and track your eco-friendly contributions.
          </p>
        </motion.div>

        {/* Payment Methods Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-8"
          variants={cardVariants}
        >
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <FaHandHoldingUsd className="w-6 h-6 text-[#00A72C]" />
              <h2 className="text-2xl font-bold text-gray-900">Payment Methods</h2>
            </div>
            <p className="text-gray-600">Manage your bank accounts and payment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paymentMethods.map((method) => (
              <motion.div
                key={method.id}
                className="text-center p-6 border border-gray-200 rounded-lg hover:border-[#00A72C] transition-colors"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src={method.logo} 
                    alt={method.name} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{method.name}</h3>
                <p className="text-xs text-gray-500">{method.url}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Payment Rates Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg border border-gray-200 p-8"
          variants={cardVariants}
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Current Payment Rates</h2>
            <p className="text-gray-600">Earnings per kg of waste material</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paymentRates.map((rate) => (
              <motion.div
                key={rate.id}
                className="flex items-center justify-between p-6 border border-gray-200 rounded-lg"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{rate.type}</h3>
                  <p className={`text-2xl font-bold ${rate.color} mb-1`}>{rate.rate}</p>
                  <p className="text-sm text-gray-600">{rate.description}</p>
                </div>
                <div className="text-gray-400">
                  {rate.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PaymentSystem;
