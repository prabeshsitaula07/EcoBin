import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar';
import { 
  FaArrowLeft, 
  FaCamera, 
  FaInfoCircle, 
  FaRecycle, 
  FaClock,
  FaExclamationTriangle
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

const commonExamples = ["Plastics", "Metals", "Glass", "Synthetic Materials"];

const ImageResultPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/image-classifier');
  };

  const handleAnalyzeAnother = () => {
    navigate('/image-classifier');
  };

  const handleTryAgain = () => {
    // Logic to retry classification
    console.log('Retrying classification...');
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
          className="flex items-center gap-4 mb-8"
          variants={cardVariants}
        >
          <motion.button
            onClick={handleBack}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaArrowLeft className="w-4 h-4" />
            Back
          </motion.button>
          <h1 className="text-3xl font-bold text-[#00A72C]">Classification Result</h1>
        </motion.div>

        {/* Main Result Card */}
        <motion.div 
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-6"
          variants={cardVariants}
        >
          {/* Waste Type Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Non-Degradable Waste</h2>
              <p className="text-green-600 font-semibold">Confidence: 83%</p>
            </div>
            <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Non-degradable
            </span>
          </div>

          {/* Detected Items */}
          <div className="mb-6">
            <p className="text-gray-700 mb-2">Detected items:</p>
            <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              Inorganic waste
            </span>
          </div>

          {/* About Section */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <FaInfoCircle className="w-5 h-5 text-[#00A72C]" />
              <h3 className="text-lg font-semibold text-gray-900">About this waste type</h3>
            </div>
            <p className="text-gray-700">This waste does not decompose naturally</p>
          </div>

          {/* Details Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.div 
              className="bg-gray-50 rounded-lg p-4"
              variants={cardVariants}
            >
              <div className="flex items-center gap-2 mb-2">
                <FaRecycle className="w-5 h-5 text-[#00A72C]" />
                <h4 className="font-semibold text-gray-900">Disposal Method</h4>
              </div>
              <p className="text-gray-700 text-sm">
                Requires proper recycling or special disposal methods
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 rounded-lg p-4"
              variants={cardVariants}
            >
              <div className="flex items-center gap-2 mb-2">
                <FaClock className="w-5 h-5 text-[#00A72C]" />
                <h4 className="font-semibold text-gray-900">Decomposition Time</h4>
              </div>
              <p className="text-gray-700 text-sm">
                Can take hundreds to thousands of years to break down
              </p>
            </motion.div>
          </div>

          {/* Common Examples */}
          <div>
            <h4 className="text-[#00A72C] font-semibold mb-3">Common Examples</h4>
            <div className="flex flex-wrap gap-2">
              {commonExamples.map((example, index) => (
                <motion.span 
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {example}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 mb-6"
          variants={cardVariants}
        >
          <motion.button
            onClick={handleAnalyzeAnother}
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-500 hover:to-green-600 transition"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaCamera className="w-5 h-5" />
            Analyze another image
          </motion.button>

          <motion.button
            onClick={handleTryAgain}
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#00A72C] to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Try Again
          </motion.button>
        </motion.div>

        {/* Note Section */}
        <motion.div 
          className="bg-yellow-50 border border-yellow-200 rounded-lg p-4"
          variants={cardVariants}
        >
          <div className="flex items-start gap-2">
            <FaExclamationTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div>
              <p className="text-yellow-800 font-medium mb-1">Note:</p>
              <p className="text-yellow-700 text-sm">
                This classification is based on AI analysis and should be used as a guide. 
                For specific disposal requirements, please check with your local waste management guidelines.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ImageResultPage;
