import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaBell, FaCreditCard, FaFileAlt } from 'react-icons/fa'

const SolutionSection = () => {
  const solutions = [
    {
      title: 'Real-Time Tracking',
      icon: <FaMapMarkerAlt className="w-10 h-10 text-blue-600" />,
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Instant Notifications',
      icon: <FaBell className="w-10 h-10 text-yellow-600" />,
      bgColor: 'bg-yellow-100'
    },
    {
      title: 'Digital Payments',
      icon: <FaCreditCard className="w-10 h-10 text-green-600" />,
      bgColor: 'bg-green-100'
    },
    {
      title: 'Littering Reports',
      icon: <FaFileAlt className="w-10 h-10 text-red-600" />,
      bgColor: 'bg-red-100'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Solution
      </motion.h2>
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {solutions.map((solution, index) => (
          <motion.div 
            key={index} 
            className="text-center"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div 
              className={`${solution.bgColor} rounded-lg p-6 mb-4 mx-auto w-20 h-20 flex items-center justify-center`}
              whileHover={{ 
                rotate: 360,
                transition: { duration: 0.6 }
              }}
            >
              {solution.icon}
            </motion.div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">{solution.title}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default SolutionSection 