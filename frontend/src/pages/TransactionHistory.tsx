import { motion } from 'framer-motion';
import SideBar from '../components/SideBar';
import { 
  FaHistory,
  FaCalendarAlt,
  FaWallet,
  FaDownload,
  FaFileAlt
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

const transactionData = [
  {
    date: "8 August 2025",
    time: "08:30 AM",
    description: "Plastic Bottles Collection",
    amount: "NPR 450",
    paymentMethod: "Digital Wallet",
    reference: "WH001"
  },
  {
    date: "5 August 2025",
    time: "10:15 AM",
    description: "Organic Waste Collection",
    amount: "NPR 320",
    paymentMethod: "Digital Wallet",
    reference: "WH002"
  },
  {
    date: "2 August 2025",
    time: "09:45 AM",
    description: "Paper Waste Collection",
    amount: "NPR 280",
    paymentMethod: "Digital Wallet",
    reference: "WH003"
  },
  {
    date: "30 July 2025",
    time: "11:20 AM",
    description: "Mixed Waste Collection",
    amount: "NPR 520",
    paymentMethod: "Digital Wallet",
    reference: "WH004"
  },
  {
    date: "27 July 2025",
    time: "08:00 AM",
    description: "Glass Bottles Collection",
    amount: "NPR 380",
    paymentMethod: "Digital Wallet",
    reference: "WH005"
  },
  {
    date: "24 July 2025",
    time: "10:30 AM",
    description: "Plastic Bottles Collection",
    amount: "NPR 450",
    paymentMethod: "Digital Wallet",
    reference: "WH006"
  }
];

const TransactionHistory = () => {
  const handleExportCSV = () => {
    // CSV export functionality
    console.log('Exporting CSV...');
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
        {/* Header */}
        <motion.div 
          className="flex justify-between items-start mb-8"
          variants={cardVariants}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#00A72C] rounded-full flex items-center justify-center">
              <FaHistory className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Transaction History</h1>
              <p className="text-gray-600">Complete record of all your waste management transactions and earnings</p>
            </div>
          </div>
          <motion.button
            className="bg-[#00A72C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00A72C]/90 transition flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleExportCSV}
          >
            <FaDownload className="w-4 h-4" />
            Export CSV
          </motion.button>
        </motion.div>

        {/* Recent Transactions Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
          variants={cardVariants}
        >
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">Recent Transactions</h2>
              <p className="text-sm text-gray-600">Showing {transactionData.length} of {transactionData.length} transactions</p>
            </div>
          </div>

          {/* Transaction Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-[#00A72C]">Date & Time</th>
                  <th className="text-left py-4 px-4 font-semibold text-[#00A72C]">Descriptions</th>
                  <th className="text-left py-4 px-4 font-semibold text-[#00A72C]">Amount</th>
                  <th className="text-left py-4 px-4 font-semibold text-[#00A72C]">Payment Method</th>
                  <th className="text-left py-4 px-4 font-semibold text-[#00A72C]">Reference</th>
                </tr>
              </thead>
              <tbody>
                {transactionData.map((transaction, index) => (
                  <motion.tr 
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="w-4 h-4 text-[#00A72C]" />
                        <div>
                          <p className="font-medium text-gray-900">{transaction.date}</p>
                          <p className="text-sm text-gray-500">{transaction.time}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <FaFileAlt className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-900">{transaction.description}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="font-semibold text-gray-900">{transaction.amount}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <FaWallet className="w-4 h-4 text-[#00A72C]" />
                        <span className="text-gray-900">{transaction.paymentMethod}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-gray-900">{transaction.reference}</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <motion.div 
            className="mt-6 pt-6 border-t border-gray-200"
            variants={cardVariants}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">Total Transactions</p>
                <p className="text-lg font-bold text-gray-900">{transactionData.length}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Amount</p>
                <p className="text-lg font-bold text-[#00A72C]">
                  NPR {transactionData.reduce((sum, item) => sum + parseInt(item.amount.replace('NPR ', '')), 0)}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TransactionHistory;
