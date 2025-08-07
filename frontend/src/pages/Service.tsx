import { motion } from 'framer-motion'
import { FaTruck, FaMobile, FaBell, FaChartLine } from 'react-icons/fa'


const services = [
  {
    icon: <FaTruck className="w-8 h-8 text-[#00A72C]" />,
    title: "Live Truck Tracking",
    description: "Real-time tracking of waste collection trucks with accurate arrival times."
  },
  {
    icon: <FaMobile className="w-8 h-8 text-[#00A72C]" />,
    title: "Payment through mobile",
    description: "Payment through mobile on the basis of degradable and non-degradable waste"
  },
  {
    icon: <FaBell className="w-8 h-8 text-[#00A72C]" />,
    title: "Smart Notifications",
    description: "Get notified when waste trucks are approaching your area."
  },
  {
    icon: <FaChartLine className="w-8 h-8 text-[#00A72C]" />,
    title: "Analytics Dashboard",
    description: "Track your environmental impact and earnings over time."
  }
]

const ServiceSection = () => {
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
    <section className="max-w-7xl mx-auto px-6 py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          variants={cardVariants}
        >
          Revolutionary Features
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-700 max-w-2xl mx-auto"
          variants={cardVariants}
        >
          Everything you need for smart waste management in one platform
        </motion.p>
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default ServiceSection