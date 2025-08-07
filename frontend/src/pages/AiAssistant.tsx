import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaArrowLeft,
  FaQuestionCircle,
  FaTrash,
  FaLightbulb,
  FaComments,
  FaRecycle,
  FaRobot,
  FaUser,
  FaCheckCircle
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

const quickAccessButtons = [
  {
    id: 1,
    title: "Classify Waste",
    icon: <FaQuestionCircle className="w-6 h-6" />,
    description: "Identify waste types instantly"
  },
  {
    id: 2,
    title: "Disposal Tips",
    icon: <FaLightbulb className="w-6 h-6" />,
    description: "Best practices for different materials"
  },
  {
    id: 3,
    title: "Ask Questions",
    icon: <FaComments className="w-6 h-6" />,
    description: "Get answers about waste management"
  },
  {
    id: 4,
    title: "Eco Tips",
    icon: <FaRecycle className="w-6 h-6" />,
    description: "Reduce, reuse, and sustainability advice"
  }
];

const helpCategories = [
  {
    id: 1,
    title: "Classification",
    description: "Identify waste types instantly"
  },
  {
    id: 2,
    title: "Disposal",
    description: "Best practices for different materials"
  },
  {
    id: 3,
    title: "Recycling",
    description: "How to prepare items for recycling"
  },
  {
    id: 4,
    title: "Eco Tips",
    description: "Reduce, reuse, and sustainability advice"
  }
];

const popularQuestions = [
  "Can I recycle pizza boxes?",
  "What to do with electronic waste?",
  "How to compost at home?",
  "Best way to dispose of batteries?"
];

const chatMessages = [
  {
    id: 1,
    type: "ai",
    message: "Hello! I'm your waste management AI assistant. I can help you classify waste, provide disposal tips, and answer any questions about eco-friendly practices.",
    timestamp: "2:30 PM"
  },
  {
    id: 2,
    type: "user",
    message: "Is a banana peel bio degradable?",
    timestamp: "2:31 PM"
  },
  {
    id: 3,
    type: "ai",
    message: "Yes! Banana peels are 100% biodegradable. They decompose naturally within 3-5 weeks and make excellent compost material. You can dispose of them in your organic waste bin or add them to your home compost.",
    timestamp: "2:31 PM"
  }
];

const AiAssistant = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Assistant</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get instant help with waste classification, disposal tips, and eco-friendly advice from our AI assistant.
          </p>
        </motion.div>

        {/* Quick Access Buttons */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {quickAccessButtons.map((button) => (
            <motion.button
              key={button.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-center hover:shadow-xl transition-all duration-300 hover:border-[#00A72C] group"
              variants={cardVariants}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-[#00A72C] rounded-lg flex items-center justify-center text-white group-hover:bg-[#00A72C]/90 transition">
                {button.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{button.title}</h3>
              <p className="text-sm text-gray-600">{button.description}</p>
            </motion.button>
          ))}
        </motion.div>

        {/* Chat with AI Assistant Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-8"
          variants={cardVariants}
        >
          <div className="flex items-center gap-3 mb-6">
            <FaComments className="w-6 h-6 text-[#00A72C]" />
            <h2 className="text-2xl font-bold text-gray-900">Chat with AI Assistant</h2>
          </div>
          <p className="text-gray-600 mb-6">Ask me anything about waste management and eco-friendly practices</p>

          {/* Chat Messages */}
          <div className="space-y-4 mb-6">
            {chatMessages.map((message) => (
              <motion.div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                initial={{ opacity: 0, x: message.type === 'user' ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className={`flex items-start gap-3 max-w-xs lg:max-w-md ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === 'ai' ? 'bg-gray-300' : 'bg-[#00A72C]'
                  }`}>
                    {message.type === 'ai' ? (
                      <FaRobot className="w-4 h-4 text-gray-600" />
                    ) : (
                      <FaUser className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div className={`rounded-lg p-4 ${
                    message.type === 'ai' 
                      ? 'bg-gray-100 text-gray-800' 
                      : 'bg-[#00A72C] text-white'
                  }`}>
                    <p className="text-sm">{message.message}</p>
                    <p className={`text-xs mt-2 ${
                      message.type === 'ai' ? 'text-gray-500' : 'text-[#00A72C]/80'
                    }`}>
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Type your message here..."
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00A72C] focus:border-transparent"
            />
            <motion.button
              className="bg-[#00A72C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00A72C]/90 transition"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Sections */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* What I Can Help With */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
            variants={cardVariants}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">What I Can Help With</h3>
            <div className="space-y-3">
              {helpCategories.map((category) => (
                <div key={category.id} className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#00A72C] rounded-full"></div>
                  <div>
                    <p className="font-semibold text-gray-900">{category.title}</p>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Popular Questions */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
            variants={cardVariants}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Questions</h3>
            <div className="space-y-3">
              {popularQuestions.map((question, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#00A72C] rounded-full mt-2"></div>
                  <p className="text-gray-700">{question}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AiAssistant;
