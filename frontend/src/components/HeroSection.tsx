import { motion } from 'framer-motion'
import { FaTruck, FaWifi } from 'react-icons/fa'

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const illustrationVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3
      }
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-green-800 mb-4"
            variants={itemVariants}
          >
            Smart Waste Management System
          </motion.h1>
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-green-700 mb-6"
            variants={itemVariants}
          >
            Nepal
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg mb-8"
            variants={itemVariants}
          >
            Digitalizing Urban Cleanliness and Citizen Engagement
          </motion.p>
          <motion.button 
            className="bg-[#00A72C] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#00A72C]/90 transition-colors"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="relative"
          variants={illustrationVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-green-100 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full -mr-16 -mt-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-300 rounded-full -ml-12 -mb-12 opacity-50"></div>
            
            <div className="relative z-10 mb-8">
              <motion.div 
                className="bg-green-600 rounded-lg p-4 w-48 h-24 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <FaTruck className="w-16 h-16 text-white" />
              </motion.div>
              <motion.div 
                className="absolute -top-2 -right-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <FaWifi className="w-8 h-8 text-green-600" />
              </motion.div>
            </div>
            
            <div className="relative z-10">
              <motion.div 
                className="bg-white rounded-lg p-3 w-32 h-48 mx-auto shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-blue-100 rounded p-2 h-full">
                  <div className="bg-blue-500 rounded w-full h-2 mb-2"></div>
                  <div className="bg-green-500 rounded-full w-3 h-3 mx-auto mb-2"></div>
                  <div className="bg-blue-300 rounded w-3/4 h-1 mb-1"></div>
                  <div className="bg-blue-300 rounded w-1/2 h-1"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection 