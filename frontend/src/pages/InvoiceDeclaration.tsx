import { motion } from 'framer-motion';
import SideBar from '../components/SideBar';
import { 
  FaFileInvoice,
  FaUser,
  FaHome,
  FaUsers,
  FaTrash,
  FaCheckCircle,
  FaStamp
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

const invoiceData = [
  {
    date: "Jul 15, 2025",
    description: "Organic waste collection",
    quantity: "7 kgs",
    rate: "NPR 2.5/kg",
    amount: "NPR 17.50"
  },
  {
    date: "Jul 22, 2025",
    description: "Inorganic waste collection",
    quantity: "5 kgs",
    rate: "NPR 3.0/kg",
    amount: "NPR 15.00"
  },
  {
    date: "Aug 05, 2025",
    description: "Organic waste collection",
    quantity: "9 kgs",
    rate: "NPR 2.5/kg",
    amount: "NPR 22.50"
  },
  {
    date: "Aug 12, 2025",
    description: "Mixed waste collection",
    quantity: "8 kgs",
    rate: "NPR 3.5/kg",
    amount: "NPR 28.00"
  }
];

const InvoiceDeclaration = () => {
  const totalAmount = invoiceData.reduce((sum, item) => {
    return sum + parseInt(item.amount.replace('NPR ', ''));
  }, 0);

  return (
    <div className="flex min-h-screen bg-[#f6fbf7]">
      <SideBar />
      
      <motion.div 
        className="flex-1 p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 max-w-4xl mx-auto"
          variants={cardVariants}
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#00A72C] rounded-full flex items-center justify-center">
                <FaFileInvoice className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Government of Nepal</h1>
                <p className="text-sm text-gray-600">Powered by EcoBin</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-gray-900">Invoice no.: 87673232</p>
              <p className="text-sm text-gray-600">Date: {new Date().toLocaleDateString()}</p>
            </div>
          </div>

          {/* Invoice Details */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
            variants={cardVariants}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaUser className="w-5 h-5 text-[#00A72C]" />
                <div>
                  <span className="font-bold text-gray-900">Name: </span>
                  <span className="text-gray-700">Ishan Sitaula</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaHome className="w-5 h-5 text-[#00A72C]" />
                <div>
                  <span className="font-bold text-gray-900">House number: </span>
                  <span className="text-gray-700">001-002-003</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaUsers className="w-5 h-5 text-[#00A72C]" />
                <div>
                  <span className="font-bold text-gray-900">Tenants count: </span>
                  <span className="text-gray-700">3</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaTrash className="w-5 h-5 text-[#00A72C]" />
                <div>
                  <span className="font-bold text-gray-900">Disposed: </span>
                  <span className="text-gray-700">3 times</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Invoice Period */}
          <motion.div 
            className="text-center mb-8 p-4 bg-gray-50 rounded-lg"
            variants={cardVariants}
          >
            <p className="text-lg font-semibold text-gray-900">
              Invoice from month Jul 2025 - Aug 2025
            </p>
          </motion.div>

          {/* Table */}
          <motion.div 
            className="mb-8"
            variants={cardVariants}
          >
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-[#00A72C] text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">Date</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Description</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Quantity</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Rate</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {invoiceData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">{item.date}</td>
                      <td className="border border-gray-300 px-4 py-3">{item.description}</td>
                      <td className="border border-gray-300 px-4 py-3">{item.quantity}</td>
                      <td className="border border-gray-300 px-4 py-3">{item.rate}</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold">{item.amount}</td>
                    </tr>
                  ))}
                  <tr className="bg-gray-100 font-bold">
                    <td colSpan={4} className="border border-gray-300 px-4 py-3 text-right">
                      Total Amount:
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      NPR {totalAmount}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div 
            className="flex justify-between items-end"
            variants={cardVariants}
          >
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Amount in words:</p>
                <p className="font-semibold text-gray-900">
                  Six thousand Nine hundred and sixty nine only
                </p>
              </div>
              <motion.button
                className="bg-[#00A72C] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#00A72C]/90 transition flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaCheckCircle className="w-4 h-4" />
                Clear
              </motion.button>
            </div>
            
            {/* Official Seal */}
            <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center">
              <div className="text-center">
                <FaStamp className="w-8 h-8 text-white mx-auto mb-1" />
                <p className="text-white font-bold text-xs">SEAL</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InvoiceDeclaration;
