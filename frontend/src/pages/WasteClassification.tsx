import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  FaArrowLeft,
  FaCamera,
  FaUpload,
  FaSearch,
  FaLeaf,
  FaRecycle,
  FaTrash
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

const classificationMethods = [
  {
    id: 1,
    title: "Camera Scan",
    description: "Take a photo to classify waste instantly",
    icon: <FaCamera className="w-12 h-12 text-[#00A72C]" />,
    buttonText: "Open Camera",
    buttonIcon: <FaCamera className="w-4 h-4" />
  },
  {
    id: 2,
    title: "Upload Image",
    description: "Upload a photo from your gallery",
    icon: <FaUpload className="w-12 h-12 text-gray-600" />,
    buttonText: "Choose File",
    buttonIcon: <FaUpload className="w-4 h-4" />
  },
  {
    id: 3,
    title: "Text Search",
    description: "Search by item name or description",
    icon: <FaSearch className="w-12 h-12 text-gray-600" />,
    buttonText: "Search",
    buttonIcon: <FaSearch className="w-4 h-4" />
  }
];

const wasteCategories = [
  {
    id: 1,
    title: "Biodegradable",
    description: "Organic waste that decomposes naturally",
    icon: <FaLeaf className="w-8 h-8 text-green-500" />,
    tag: "Compostable",
    tagColor: "bg-green-100 text-green-700"
  },
  {
    id: 2,
    title: "Recyclable",
    description: "Materials that can be processed and reused",
    icon: <FaRecycle className="w-8 h-8 text-green-500" />,
    tag: "Reusable",
    tagColor: "bg-green-100 text-green-700"
  },
  {
    id: 3,
    title: "Non-recyclable",
    description: "Waste that requires special disposal methods",
    icon: <FaTrash className="w-8 h-8 text-red-500" />,
    tag: "Special Handling",
    tagColor: "bg-red-100 text-red-700"
  }
];

const WasteClassification = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Waste Classification</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Use our AI-powered system to classify your waste and know exactly what type it is.
          </p>
        </motion.div>

        {/* Classification Methods */}
        <motion.div 
          className="mb-16"
          variants={cardVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {classificationMethods.map((method) => (
              <motion.div
                key={method.id}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-center"
                variants={cardVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-[#00A72C] text-sm mb-6">{method.description}</p>
                <motion.button
                  className="bg-[#00A72C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00A72C]/90 transition flex items-center justify-center gap-2 w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {method.buttonIcon}
                  {method.buttonText}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Separator */}
        <motion.div 
          className="relative mb-16"
          variants={cardVariants}
        >
          <div className="border-t border-gray-300"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#f6fbf7] px-4">
            <FaLeaf className="w-6 h-6 text-[#00A72C] mx-auto" />
          </div>
        </motion.div>

        {/* Waste Categories */}
        <motion.div 
          variants={cardVariants}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Waste Categories</h2>
            <p className="text-gray-600">
              Learn about different types of waste and their proper disposal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wasteCategories.map((category) => (
              <motion.div
                key={category.id}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
                variants={cardVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-gray-100 rounded-full">
                    {category.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${category.tagColor}`}>
                    {category.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WasteClassification;
